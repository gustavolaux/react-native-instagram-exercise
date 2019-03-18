import React, { PureComponent } from 'react';
import { KeyboardAvoidingView, ScrollView, View, StyleSheet, Text, Dimensions } from 'react-native';

import { MessageInput } from '../../components';
import { Header } from './sections';

const window = Dimensions.get('window');

export class MessageDetail extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            message: {
                isOnline: false,
                members: [],
                conversation: [],
            },
        };
    }

    componentDidMount() {
        this.setState({
            message: this.props.message,
        });
    }

    getScrollViewRef = (ref) => {
        this.scrollView = ref;
    };

    scrollBottom = () => {
        this.scrollView.scrollToEnd({ animated: true });
    };

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

    handleMessage = (text) => {
        const message = {
            ...this.state.message,
        };

        message.conversation.unshift({
            text: text,
            owner: 'me',
        });

        this.setState({ message });
    };

    render() {
        return (
            <View style={ [styles.flex1, styles.container] }>
                <Header message={ this.state.message } />

                <KeyboardAvoidingView
                    style={ styles.flex1 }
                    // contentContainerStyle={ styles.asd }
                    behavior='padding'
                    keyboardVerticalOffset={20}
                >
                    <ScrollView
                        style={ [styles.container] }
                        contentContainerStyle={ [styles.contentContainer] }
                        ref={ this.getScrollViewRef }
                        onContentSizeChange={ this.scrollBottom }
                    >
                        { this.state.message.conversation.map(this.renderBaloon) }
                    </ScrollView>

                    <MessageInput action={ this.handleMessage } />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
    },
    contentContainer: {
        flexDirection: 'column-reverse',
        paddingTop: 30,
        paddingBottom: 10,
    },
    baloon: {
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
        minHeight: 30,
        marginHorizontal: 10,
        marginVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        maxWidth: window.width * 0.8,
    },
});
