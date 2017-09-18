import React from 'react'
import ReactDom from 'react-dom'

let clock = function(){
    return <h2>Time now: {new Date().toLocaleTimeString()} This is clock</h2>
}

setInterval( function(){
   

ReactDom.render(
    clock(),
    document.getElementById('root')
);
},1000);