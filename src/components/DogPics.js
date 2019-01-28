import * as React from 'react'

export default function PhotoPage(props) {
    return (<div>
        <img src={props.dogPics[0].link}></img>
    </div>)
}