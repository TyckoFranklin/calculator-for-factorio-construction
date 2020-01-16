import React from 'react';
import './Content.css';
import Recipe from './Recipe/_Recipe'

function Content(props) {
    const { selectedEntity } = props;
    if(selectedEntity) {
        return (
            <div className="content">
                <Recipe className="viewedItem" item={selectedEntity}/>
                <Recipe item={selectedEntity}/>
                {/* <div className="requires">
                    <div className="recipe">
                        Gear
                        <div>Iron plate (amount) (amount per second)</div>
                    </div>
                    <div className="recipe">
                        Pipe
                        <div>Iron plate (amount) (amount per second)</div>
                    </div>
                </div>
                <div className="usedFor">
                    <div className="recipe">Car</div>
                    <div className="recipe">Electric engine unit</div>
                    <div className="recipe">Tank</div>
                </div> */}
            </div>
        );
    }
    return (<div className="content"/>);
}

export default Content;
