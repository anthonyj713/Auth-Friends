import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        friend: {
            friendname: '',
            age: '',
            email: ''
        }
    };

handleChange = e => {
    this.setState({
        friend: {
            ...this.state.friend,
            [e.target.name] : e.target.value
        }
    })
};

addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res => {
            console.log({res})
            this.setState({
                friend:{
                    ...this.state.friend
                }
            })
        })
        .catch(err => {
            console.log({err})
        })
};

render() {
    return (
        <div>
            <form onSubmit={this.addFriend}>
                <input    
                    type='text'
                    name='friendname'
                    placeholder='Name'
                    value={this.addFriend.friendname}
                    onChange={this.handleChange}
                    />  
                <input    
                    type='text'
                    name='age'
                    placeholder='Age'
                    value={this.addFriend.age}
                    onChange={this.handleChange}
                    />
                <input    
                    type='text'
                    name='email'
                    placeholder='Email'
                    value={this.addFriend.email}
                    onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
            </form>
        </div>  
)
}
};

export default AddFriend;
