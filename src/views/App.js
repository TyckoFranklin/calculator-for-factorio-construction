import React from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import './App.css';
import Header from './Header/_Header'
import Panel from './Panel/_Panel'
import Content from './Content/_Content'

function App(props) {
    props.fetchRecipes();
    /*  Add logic and components for login */
    return (
        <div className="App">
            <Header />
            <Panel />
            <Content />
        </div>
    );
}

export default withAuthenticator(App);
