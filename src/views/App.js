import React, { useState, useRef } from 'react';
import { withAuthenticator } from 'aws-amplify-react'
import './App.css';
import Header from './Header/_Header'
import Panel from './Panel/_Panel'
import Content from './Content/_Content'

function App(props) {
    props.fetchRecipes();
    // const [acknowledged, setAcknowledged] = useState(false);
    // const askedForMobile = useRef(false);
    // if(!acknowledged &&
    //     (matchMedia("screen and (max-width:800px)").matches
    //     || matchMedia("screen and (max-height:800px))").matches)){
    //         return (
    //             <div className="mobile-prompt">
    //                 <button onClick={()=>setAcknowledged(true)}>Mobile should be using Landscape</button>
    //             </div>
    //         )
    // }
    // if(askedForMobile.current === false &&
    //     (matchMedia("screen and (max-width:800px)").matches
    //     || matchMedia("screen and (max-height:800px))").matches)){
    //     askedForMobile.current = true;
    //     window.document.body.requestFullscreen();
    //     window.screen.orientation.lock("landscape")
    //     .then(function() {
    //         // alert('Locked');
    //     })
    //     .catch(function(error) {
    //         alert(error);
    //     });
    // }
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
