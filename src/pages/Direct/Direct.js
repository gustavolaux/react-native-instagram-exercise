import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { SearchInput } from '../../components';
import { Header, Footer, MessageList } from './sections';

export class Direct extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            searchContent: '',
            filteredMessages: [],
        };
    }

    componentDidMount() {
        this.setState({
            messages: this.props.messages,
            filteredMessages: this.props.messages,
        });
    }

    updateSearchContent = (term) => {
        const filteredMessages = this.state.messages.filter(
            m => m.members.some(member => member.name.toLowerCase().includes(term.toLowerCase()))
        );

        this.setState({
            searchContent: term,
            filteredMessages: term ? filteredMessages : this.state.messages,
        });
    };

    render() {
        return (
            <View style={ styles.container }>
                <Header />
                <View style={ styles.content }>
                    <SearchInput callOnTyping action={ this.updateSearchContent } />
                    <MessageList messages={ this.state.filteredMessages } />
                </View>
                <Footer />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20,
    },
});
