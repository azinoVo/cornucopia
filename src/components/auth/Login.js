import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        };
    }

    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };

    login = () => {
        // Put this in when backend is set-up
    }

    render() {
        return (
            <div>
                <form className="login-form" onSubmit={login}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={handleChange}
                    />
                    <button className='login-button'>Login</button>
                </form>
            </div>
        );
    }
}
