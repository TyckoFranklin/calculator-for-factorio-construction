import React from 'react';
import './Recipe.css';

/**
 *       Need to program for productivity modules.
 *       Need to insert constants into below html.
 * @param {*} props 
 */

function Recipe(props) {
    const { item, entities, className, perSecond, setPerSecond } = props;
    const handleChange = (event) => setPerSecond(event.target.value);
    return (
        <div className={`recipe ${className}`} >
            {entities.get(item).name}
            {className === "viewedItem" ? <input type="number" value={perSecond} onChange={handleChange}/> : <div>`amount per second`</div>}
            <div>Gear (amount) (gearPerSecond)</div>
            <div>Pipe (amount) (pipePerSecond)</div>
            <div>Steel plate (amount) (steelPerSecond)</div>
            <div>Crafting speed input</div>
        </div>
    );
}

export default Recipe;
