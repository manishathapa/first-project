
import React, { Component } from 'react';

class Signup extends Component {
    constructor(props){
        super(props)
    this.state ={
        fullname: '',
        age:'',
        city: '',
        password: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChangekey(key, event){
        this.setState({key: event.target.value});
    }


    handleSubmit(event){
        alert(this.state.fullname + " " + this.state.age + " " + this.state.city + " " + this.state.password);
        event.preventDefault();
    }
    

    render() {
        
        return (
            <form>
                <label>

            Fullname: <br/>
            <input type="text" name ="fullname" value ={this.state.name} onChange={this.handleChange}/> <br/>
            </label>
            <label>
            Age: <br/>
            <input type="text" name ="age" value ={this.state.name} onChange={this.handleChange}/> <br/>
            </label>
            <label>
            City: <br/>
            <input type="text" name ="city" value ={this.state.name} onChange={this.handleChange}/> <br/>
            </label>
            <label>
            Password: <br/>
            <input type="text" name ="password" value ={this.state.name} onChange={this.handleChange}/> <br/>
            </label>
            <input type="submit" value="Submit" onClick={() => this.handleSubmit()} />           


            </form>


        );

            
            


        


    };
    
        
}
export default Signup
