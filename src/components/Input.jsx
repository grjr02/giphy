import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export default function Input(props) {

    return (
        <div className="inputDiv">
            <TextField
            id="outlined-size-small"
            variant="outlined"
            size="small"
            type="text" value={props.value} onChange={props.onChange}/><br/>
            <Button variant="outlined" onClick={props.searchButtonPressed}>Search</Button>
            <Button variant="outlined" onClick={props.randomButtonPressed}>Random</Button>
        </div>
    )
}
