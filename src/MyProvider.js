import { Component } from 'react';
import MyContext from './MyContext';

class MyProvider extends Component {
    state = {
        basket: [

        ],
        user: {

        }
    };

    render() {
        <MyContext.Provider value={{ basket: this.state.basket, user: this.state.user, total: this.state.basket.length() }}>
            {this.props.children}
        </MyContext.Provider>
    }
}
