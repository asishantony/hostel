import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        const {name} = this.props
        return <h1 className='welcome'>Welcome to {name}'s React Journey</h1>
    }
}
export default Welcome;
