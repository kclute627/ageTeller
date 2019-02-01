import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import AgeStats from './AgeStats';
import './App.css';




class App extends Component {

    state = {
        newDate: '',
        birthday: '1987-06-27',
        clicked: false,
    }

    onChangeHandler = (event) =>{
        this.setState({
            newDate: event.target.value,
        })
    }

    changeBirthday = ()=>{
        console.log(this.state)
        this.setState({
            birthday: this.state.newDate,
            clicked: !this.state.clicked,
        });
    }

    render(){
        return (
            <div className='App'>
                <Form inline>
                    <h2>Input your Birthday!</h2>
                    <FormControl 
                    type='date'
                    onChange={(e)=>this.onChangeHandler(e)}>
                    </FormControl>
                    {' '}
                    <Button
                    onClick ={()=>this.changeBirthday()}>
                        Submit
                    </Button>
                    {this.state.clicked ? 
                    <div className= 'fade age-states'><AgeStats date={this.state.birthday}/></div>
                    : null}
                </Form>
                
            </div>

        )
    }
}




export default App;