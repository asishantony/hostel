import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     increment(){
        //  this.setState({
        //     count: this.state.count+1
        //  },()=>{
        //     console.log(this.state.count)
        // })
        this.setState((prevState)=>({
            count:prevState.count+1
        }),()=>{
            console.log(this.state.count) 
        })
     }
     incrementFive(){
       for (let index = 0; index < 5; index++) {
           this.increment();
           
       }

    }
     reset(){
        this.setState({
           count: 0
        })
    }
     
    render() {
        return (
            <div>
              <div className="count">Count - {this.state.count}</div> 
              <button onClick={()=>this.increment()}>Increment</button>
              <button onClick={()=>this.incrementFive()}>Increment 5</button>
              <button onClick={()=>this.reset()}>Reset</button>
            </div>
        )
    }
}

export default Counter
