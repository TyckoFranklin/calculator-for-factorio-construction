import React, {useCallback} from 'react';
import './Header.css';

function Header(props) {
    // const clickHandler1 = useCallback(()=> {
    //     const decision = window.screen.orientation.type.includes("portrait") ? "landscape" : "portrait";
    //     window.screen.orientation.lock(decision)
    //     .then(function() {
    //         // alert('Locked');
    //     })
    //     .catch(function(error) {
    //         alert(error);
    //     });
    // })
    // const clickHandler2 = useCallback(()=> {
    //     window.document.body.requestFullscreen();
    // })


    return (
        <div className="header">
            {/* <button className="swap" onClick={clickHandler1}>swap!!</button>
            <button className="fullscreen" onClick={clickHandler2}>Full Screen</button> */}
        </div>
    );
}

export default Header;
