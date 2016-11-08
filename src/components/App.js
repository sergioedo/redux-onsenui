import React from 'react';
import ReactDOM from 'react-dom';

import 'onsenui';
import { Page, Navigator, Button, Input } from 'react-onsenui';

import Text from '../containers/Text';

class PageOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChangeText(event) {
        //this.setState({ text: event.target.value });
        console.log("state:" + JSON.stringify(this.state));
        //console.log("props:" + JSON.stringify(this.props));
    }

    pushPage() {
        this.props.navigator.pushPage({
            component: PageTwo,
            key: 'SECOND_PAGE'
        });
    }

    render() {
        return (
            <Page>
                <div style={{ padding: 20 }}>                    
                    <Text />
                    <Button onClick={this.pushPage.bind(this)}> Push page </Button>
                </div>
            </Page>
        );
    }
};

class PageTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Page>
                <div style={{ padding: 20 }}>
                    <p>This is a second Page</p>
                    <Text />
                </div>
                <Button onClick={() => this.props.navigator.popPage()}> Pop Page </Button>
            </Page>
        );
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    renderPage (route, navigator) {
        return <route.component key={route.key} navigator={navigator} />
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    component: PageOne,
                    key: 'FIRST_PAGE'
                }}
                renderPage={this.renderPage.bind(this)}
                />
        );
    }
}