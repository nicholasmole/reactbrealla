import React from 'react'
import ReactDom from 'react-dom'

let name = "Namesd"
let obj = {
    fnmae: 'james',
    lname: 'bbond'

}
const element = <h1>Welcome to {obj.fnmae}-{obj.lname} {name}</h1>

ReactDom.render(
    element,
    document.getElementById('root')
);