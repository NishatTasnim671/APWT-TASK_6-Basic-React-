import React, { Component } from "react";

class Contact extends Component{
    constructor(){
        super()
        this.state = {
            message: 'This is a Contact Page'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Click</button>
            </div>
        )
    }

}

export default Contact;