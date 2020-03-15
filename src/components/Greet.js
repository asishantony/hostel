import React from "react"

// function Greet() {
//     return <h1>Hello Asish</h1>
// }
const Greet = (props) =>{
   
return (<div>
    <h1>Hello {props.name} a.k.a {props.Alias}</h1>
    {props.children}
</div>)
}

export default Greet;