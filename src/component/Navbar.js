console.log('Navbar is working.');
import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import { SocialIcon } from 'react-native-elements';
import { 
    Text,
    View,
    Style,
} from 'react-native';

class Navbar extends Component {
    render() {
        return(
            <View>
                <Text style = {{ marginTop : 20 }}>Android</Text>
                <SocialIcon title='Sign In With Facebook' button type='facebook' />
                <SocialIcon title='Some Twitter Message' button type='twitter' />

            </View>
        );
    }
}
export default Navbar;
