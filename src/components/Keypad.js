// Code Keypad Component Here
import React from 'react'


class Keypad extends React.Component{


    handleInput(){
        console.log('Entering password...')
    }


    render(){
        return <input onKeyUp={this.handleInput} type="password" />;
    }
}

export default Keypad;