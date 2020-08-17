import React from 'react'

export default function Search(props) {
    return (
        <>
            <div className ="gifsContainer" >
            {
            !props.random && 
            props.imageurl.map((val ,idx) =>(

                <div key={idx}>
                {
                    val.map((x,y)=>(
                        <img key={y} src={x} alt="" width="100" height="100"/>
                    ))
                }
                </div>
            ))
            }
            {
                props.random &&
                <img src={props.imageurl[0]} alt="" width="400" height="400"/>

            }
            </div>
        </>
    )
}
