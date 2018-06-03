
import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            age: '',
            city: '',
            password: ''
        }
    }
// This is the correctc code
// change code
    handleSubmit(event) {
        alert(this.state.fullname + " " + this.state.age + " " + this.state.city + " " + this.state.password);
    }

    render() {
        return (
            <form>
                Fullname: <br />
                <input type="text" name="fullname" value={this.state.fullname} onChange={(event) => this.setState({fullname: event.target.value })} /> <br />

                Age: <br />
                <input type="text" name="age" value={this.state.age} onChange={(event) => this.setState({age: event.target.value })} /> <br />

                City: <br />
                <input type="text" name="city" value={this.state.city} onChange={(event) => this.setState({city: event.target.value })} /> <br />

                Password: <br />
                <input type="text" name="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value })} /> <br />
                <input type="submit" value="Submit" onClick={() => this.handleSubmit()} />
            </form>
        );
    }
}
export default Signup
