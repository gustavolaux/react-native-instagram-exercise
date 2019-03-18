import React, { PureComponent } from 'react';
import { TextInput, View, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class SearchInput extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            currentValue: '',
        };
    }

    onChangeText = (newValue) => {
        this.setState({
            currentValue: newValue,
        });

        if (this.props.callOnTyping) this.props.action(newValue);
    };

    render() {
        return (
            <View style={ styles.container }>
                <Icon style={ styles.icon } size={ 20 } name='search' />
                {/* <Image
                    style={ styles.icon }
                    source={ require('../../assets/images/search.png')}
                /> */}
                <TextInput
                    style={ styles.input }
                    value={ this.state.currentValue }
                    clearButtonMode='while-editing'
                    placeholder='Search'
                    placeholderTextColor='#85848A'
                    onChangeText={ this.onChangeText }
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ECECEC',
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        paddingLeft: 10,
        paddingRight: 10,
        color: '#78767E',
    },
    input: {
        flex: 1,
    },
});
