import React from 'react';
import './Content.css';

function Content(props) {
    return (
        <div className="content">
            <div className="recipe" id="viewedItem">Engine unit</div>
            <div className="requires">
                <div className="recipe">Gear</div>
                <div className="recipe">Pipe</div>
            </div>
            <div className="usedFor">
                <div className="recipe">Car</div>
                <div className="recipe">Electric engine unit</div>
                <div className="recipe">Tank</div>
            </div>
        </div>
    );
}

export default Content;
