// @ts-nocheck
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

    renderBaloon = ({ owner, text }, i) => {
        const style = {
            alignSelf: owner === 'me' ? 'flex-end' : 'flex-start',
        };

        return (
            <View key={ i } style={ styles.baloonContainer }>
                <View style={ [styles.baloon, style] }>
                    <Text>{ text }</Text>
                </View>
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
                    style={ [styles.flex1] }
                    behavior='padding'
                    keyboardVerticalOffset={20}
                >

                    <ScrollView
                        style={ [styles.container, ] }
                        contentContainerStyle={ [{ flexGrow: 1 } ] }
                        ref={ this.getScrollViewRef }
                        onContentSizeChange={ this.scrollBottom }
                    >
                        <View style={[ styles.contentContainer, styles.flex1, ]}>
                            { this.state.message.conversation.map(this.renderBaloon) }
                        </View>
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
        paddingBottom: 10,
        flexDirection: 'column-reverse',
    },
    baloonContainer: {
        marginVertical: 2,
        marginHorizontal: 10,
        minHeight: 30,
    },
    baloon: {
        backgroundColor: '#EFEFEF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        maxWidth: window.width * 0.8,
    },
});
