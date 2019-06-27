import React , { Component } from 'react';

class LoginModule extends Component {
    state = {
        id : '',
        password : '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
        console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { onSubmit } = this.props;
        onSubmit(this.state);
    }

    render() {      
        return (
            <React.Fragment>
            <div className="login-overlay"></div>
            <div className="login-modal">
                <form onSubmit={this.handleSubmit}>
                <div className="ipt-area">
                    <input 
                        className="ipt-txt"
                        placeholder="input id"
                        name="id"
                        onChange={this.handleChange}
                    />
                    <input 
                        type="password"
                        className="ipt-txt"
                        placeholder="input password"
                        name="password"
                        onChange={this.handleChange}
                    />
                    <button type="submit" className="btn_signin">SIGN IN</button>
                </div>
                </form>
            </div>
            </React.Fragment>
        )
    }
}

export default LoginModule;