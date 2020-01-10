import React from 'react';
import './Recipe.css';

/**
 *       Need to program for productivity modules.
 *       Need to insert constants into below html.
 * @param {*} props
 */

function Recipe(props) {
    const { item, entities, id } = props;
    if(entities.size === 0 || item === undefined || item === ""){
        return null;
    }
    let perSecond = 0;
    return (
        <div className="recipe" id={id} >
            {entities.get(item) ? entities.get(item).name : "startup"} (id === "viewedItem" ? input : amount per second)
            <div>Gear (amount) (gearPerSecond)</div>
            <div>Pipe (amount) (pipePerSecond)</div>
            <div>Steel plate (amount) (steelPerSecond)</div>
            <div>Crafting speed input</div>
        </div>
    );
}

export default Recipe;
