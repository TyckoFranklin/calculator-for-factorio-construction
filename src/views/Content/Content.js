import React from 'react';
import './Content.css';
import Recipe from './Entity/Recipe/_Recipe'
import Control from './Control/_Control'

function Content(props) {
    const { selectedEntity, stepsShown } = props;
    if(selectedEntity) {
        return (
            <div className="content">
                <Control/>
                {buildRecipes({ selectedEntity, stepsShown })}
            </div>
        );
    }
    return (<div className="content"/>);
}

const buildRecipes = ({ selectedEntity, stepsShown }) => {
    const elements = [
        <div className="step">
            <Recipe className="viewedItem" item={selectedEntity}/>
        </div>
    ];
    for(let i = 0; i < stepsShown; i++) {
        elements.push(
            <div className="step">
                <Recipe item={selectedEntity}/>
                <Recipe item={selectedEntity}/>
            </div>
        )
    }
    return elements;
}

export default Content;
