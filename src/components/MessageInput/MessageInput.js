import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { CIcon } from '../';

export class MessageInput extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            currentValue: '',
        }
    }

    onChangeText = (newValue) => {
        this.setState({
            currentValue: newValue,
        });
    };

    onSubmitEditing = () => {
        if (!this.state.currentValue) return;

        this.props.action(this.state.currentValue);

        this.setState({ currentValue: '' });
    };
    
    render() {
        return (
            <View style={ styles.container }>
                <CIcon style={ styles.icon } name='photo-camera' size={20} />
                <TextInput
                    value={ this.state.currentValue }
                    style={ styles.inputContainer }
                    placeholder='Mensagem...'
                    placeholderTextColor='#8B8B8B'
                    clearButtonMode='while-editing'
                    onChangeText={ this.onChangeText }
                    onSubmitEditing={ this.onSubmitEditing }
                    blurOnSubmit={false}
                />
                <View style={ styles.mediaIcons }>
                    <CIcon style={ styles.icon } name='photo-camera' size={20} />
                    <CIcon style={ styles.icon } name='photo-camera' size={20} />
                    <CIcon style={ styles.icon } name='photo-camera' size={20} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#DCDCDC',
        height: 40,
        borderRadius: 25,
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    icon: {
        justifyContent: 'center',
    },
    mediaIcons: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 80,
    },
});
