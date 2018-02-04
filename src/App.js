console.log('App is working.');
import React , { Component } from 'react';
import { 
    Text,
    StyleSheet, 
} from 'react-native';
import Navbar from './component/Navbar';

export default class App extends Component {
    /*componentDidMount() {
        console.log('componentDidMount()');
    }
    componentWillMount() {
        console.log('componentWillMount()');
    }*/
    render() {
        //console.log('render()');
        return (
            <Navbar/>
        );
    }
}