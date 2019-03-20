import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { CIcon } from '@components';

const window = Dimensions.get('window');

export class Login extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: '',
        }
    }
    

    renderWhiteText = (text, size) => {
        return <Text style={[styles.white, { fontSize: size }]}>{ text }</Text>
    };

    renderTitle = () => {
        return (
            <View style={[styles.flex1, styles.center]}>
                <CIcon
                    style={[styles.center, { marginTop: window.height * 0.1 }]}
                    iconStyle={ styles.white }
                    name='logo-instagram-white'
                    size={40}
                />
            </View>
        );
    };

    renderForm = () => {
        return (
            <View 
                style={[
                    styles.loginForm,
                    {
                        // backgroundColor: 'green',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                ]}>
                { this.renderWhiteText('Sign in and use more features', 16) }

                <View style={[styles.flex1, styles.form, { width: '100%' }]}>
                    <TextInput
                        value={ this.state.username }
                        style={ styles.input }
                        placeholder='Email or username'
                        placeholderTextColor='#DCDCDC'
                        clearButtonMode='while-editing'
                        onChangeText={ (username) => this.setState({ username }) }
                        blurOnSubmit={ false }
                    />
                    <TextInput
                        value={ this.state.password }
                        style={ styles.input }
                        placeholder='Password'
                        placeholderTextColor='#DCDCDC'
                        clearButtonMode='while-editing'
                        onChangeText={ (password) => this.setState({ password }) }
                        blurOnSubmit={ false }
                    />
                    <TouchableOpacity
                        onPress={ () => {} }
                        style={[styles.white, styles.button, styles.center]}
                    >
                        <Text>Sign in</Text>
                    </TouchableOpacity>

                    <View style={[styles.center]}>
                        { this.renderWhiteText('Forgot your login data? Get help signing in.', 10) }
                    </View>

                    <View style={[styles.center]}>
                        <Text style={[styles.white]}>OR</Text>
                    </View>
                    
                    <View style={[styles.center, {
                        flexDirection: 'row',
                    }]}>
                        <CIcon
                            name='fb-white'
                            size={10}
                            iconStyle={ styles.white }
                        />
                        <Text style={[styles.white, {
                            fontSize: 10,
                            marginLeft: 5,
                        }]}>Continue with Facebook</Text>
                    </View>
                </View>
            </View>
        );
    };

    renderFooter = () => {
        return (
            <View style={[styles.flex1, styles.center]}>
                { this.renderWhiteText('Don\'t have and account? Sign up.', 10) }
            </View>
        );
    };

    render() {
        return (
            <LinearGradient
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={['#A21391', '#D82851', '#F8A64D']}
                style={ [{flex:1}, styles.linearGradient] }
            >
                <View style={[styles.flex1, styles.container]}>
                    { this.renderTitle() }
                    { this.renderForm() }
                    { this.renderFooter() }
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 20,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginForm: {
        flex: 3,
    },
    input: {
        backgroundColor: 'white',
        height: 35,
        borderRadius: 2,
        paddingVertical: 10,
    },
    button: {
        backgroundColor: '#3E99ED',
        height: 35
    },
    form: {
        justifyContent: 'space-around'
    },
    white: {
        color: 'white',
    },
});
