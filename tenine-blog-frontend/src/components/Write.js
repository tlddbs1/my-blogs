import React , { Component } from 'react';

import '../assets/Write.css';

class Write extends Component {
    state = {
        title : '',
        contents : ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className='write_area'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        placeholder='insert the title'
                        name='title'
                        className='txt_tit'
                        onChange={this.handleChange}
                    />
                    <textarea 
                        placeholder='insert the contents'
                        name='contents'
                        onChange={this.handleChange}></textarea>
                    <button type='submit'>저장</button>
                </form>
            </div>
        )
    }
}

export default Write;