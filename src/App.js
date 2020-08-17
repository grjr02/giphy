import React, { Component } from 'react';
import axios from "axios";
import "./App.css";
import Search from "./components/Search"
import Input from './components/Input';

export default class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      apiKey: '',
      imageurls: [],
      input: '',
      random: false
    }

  }

  componentDidMount(){


    let a =  2;
    let b = 3;
    let c = 10 - (a = b + a);
    console.log("C = " + c);
    
    const url = "http://api.giphy.com/v1/gifs/trending?api_key=" + "V0MuiX5orSHSsgynSit9Z2dRlK1bzViB";

    this.setState({apiKey: url},()=>{

      this.apifunc();
    
    })

  }

  eventHandler = (event) => {

    this.setState({input: event.target.value})

  }
  
  searchButton = () => {

    let url = "http://api.giphy.com/v1/gifs/search?q="+this.state.input+"&api_key="+ "V0MuiX5orSHSsgynSit9Z2dRlK1bzViB";

    this.setState({apiKey:url, random:false, imageurls:[]},()=>{

      this.callApi();

    });
  }

  randomButton = () => {

    let url = "http://api.giphy.com/v1/gifs/random?api_key=" + "V0MuiX5orSHSsgynSit9Z2dRlK1bzViB" 

    this.setState({apiKey:url, random: true, imageurls:[]},()=>{

      this.callApi();

    });

  }

  callApi = () =>{

    this.apifunc();

  }

  apifunc = () => {

    axios.get(this.state.apiKey)
    .then((res)=>{
      const data = res.data.data;

      if(this.state.random){

        let one = [];
        one.push(data.images.downsized.url)
        this.setState({imageurls:one})

      }else{

        let imagearray = []

        for(let i = 0; i < data.length; i+=5){

          let inner = []

          for(let j = i; j < i+5; j++){
            
            inner.push(data[j].images.downsized.url);

          }

          imagearray.push(inner);

        }

        this.setState({imageurls: imagearray})
      }
    }).catch((err)=>{console.log(err +"THIS IS A CAUUGHT ERROR")})

  }
 
  render() {

    const {input,imageurls,random} = this.state;

    return (
      <>
      <h1>Giphy API</h1>

      <Input  value={input} 
              onChange={this.eventHandler} 
              searchButtonPressed={this.searchButton}
              randomButtonPressed={this.randomButton}
      />
    
      <Search imageurl={imageurls} random={random}/>
      </>
    )
  }
}

