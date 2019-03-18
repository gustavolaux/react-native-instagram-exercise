import React, { PureComponent } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

import { Header, Footer } from './sections';

export class MessageDetail extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            message: {
                conversation: [],
            },
        };
    }

    componentDidMount() {
        this.setState({
            message: this.props.message,
        });
    }

    renderBaloon = ({owner, text}, i) => {
        const style = {
            alignSelf: owner === 'me' ? 'flex-end' : 'flex-start',
        };

        return (
            <View 
                key={ i }
                // @ts-ignore
                style={ [styles.baloon, style] }
            >
                <Text>{ text }</Text>
            </View>
        );
    };

    render() {
        return (
            <View style={ styles.container }>
                <Header members={ this.state.message.members } />
                <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer } >
                    { this.state.message.conversation.map(this.renderBaloon) }
                </ScrollView>
                {/* <Footer /> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'column-reverse',
        marginBottom: 10,
    },
    baloon: {
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
    },
});
