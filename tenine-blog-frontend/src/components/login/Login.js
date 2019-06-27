import React , {Component} from 'react';
import './Login.scss';
import LoginModule from './LoginModule';
import * as api from 'api/api';

class Login extends Component {
    state = {
        id : '',
        password : '',
        show : false
    }

    handleSubmit = (data) => {
        console.log(data);
        this.signIn(data);
    }

    signIn = async (data) => {
        let userData;
        try{
            userData = await api.signIn(data);
            console.log(userData);
            this.setState({
                ...data,
                show:false
            })
            console.log(this.state);
        }catch(err) {
            alert(err);
        }
    }
    
    render() {
        const {show} = this.state;
        return(
            <div>
                { show ? 
                <LoginModule
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}/>
                : null
                }
            </div>
        )
    }
}

export default Login;