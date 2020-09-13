import React from 'react'

export default function Video(props) {

    const style = {
        border: "1px solid blue",
        width: "50%",
        height: "50%"
    }

    return (
        <video playsInline muted ref={props.stream} autoPlay style={style}/>
    )
}
