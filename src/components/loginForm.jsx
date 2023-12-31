import React from 'react'
import Joi from "joi-browser";
import Form from "./common/form";
import auth from '../services/authService';
import {Redirect} from "react-router-dom";

class LoginForm extends Form {
    state = {
        data: { username: '', password: ''},
        errors : {}
    }

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    username = React.createRef();

    //componentDidMount() {
    //    this.username.current.focus();
    //} do not over use ref


    doSubmit = async () => {
        try {
            const {data} = this.state;
            await auth.login(data.username, data.password);
            /*this.props.history.push('/');*/

            const { state } = this.props.location;
            window.location = state ? state.from.pathname : '/'; // a full reload of application
        } catch (e) {
            if (e.response && e.response.status === 400) {
                const errors = {...this.state.errors};
                errors.username = e.response.data;
                this.setState({errors});
            }
        }
    };


    render() {
        if(auth.getCurrentUser()) return <Redirect to='/' />

        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username','Username')}
                    {this.renderInput('password','Password','password')}
                    {this.renderButton('Login')}
                </form>
            </div>
        )
    }
}
export default LoginForm;