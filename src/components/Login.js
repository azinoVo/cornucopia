import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                <form className="login-form" onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        placeholder="username"
                        name="username"
                        value={}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={}
                        onChange={handleChange}
                    />
                    <button className="loginBtn">Login</button>
                </form>
            </div>
        );
    }
}
