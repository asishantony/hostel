import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1 className='welcome'>Welcome to {this.props.name}'s React Journey</h1>
    }
}
export default Welcome;
