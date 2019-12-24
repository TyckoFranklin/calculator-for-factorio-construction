import React from 'react';
import './Recipe.css';

/**
 *       Need to program for productivity modules.
 *       Need to insert constants and variables into below html.
 * @param {*} props 
 */

function Recipe(props) {
    let perSecond = 0;
    return (
        <div className="recipe" id="viewedItem">
            Engine unit (amount per second input)
            <div>Gear (amount) {perSecond}</div>
            <div>Pipe (amount) (amount per second)</div>
            <div>Steel plate (amount) (amount per second)</div>
            <div>Crafting speed input</div>
        </div>
    );
}

export default Recipe;
