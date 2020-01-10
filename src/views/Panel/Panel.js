import React,{useEffect, useRef} from 'react';
import './Panel.css';

function Panel(props) {
    const { entities, selectedEntity, setSelectedEntity } = props;
    const selectedEntityRef = useRef();

    useEffect(()=>{
        if(selectedEntityRef.current !== undefined){
            selectedEntityRef.current.scrollIntoView({behavior:"smooth", block:"nearest"});
        }
    })
    return (
        <div className="panel">
                {buildEntities({entities, setSelectedEntity, selectedEntity, selectedEntityRef})}
        </div>
    );
}

const buildEntities = ({entities, setSelectedEntity, selectedEntity, selectedEntityRef}) => {
    const elements = [];
    for(const [key, value] of entities) {
        elements.push(
            <div
                key={key}
                ref={r=>{if(selectedEntity === key){selectedEntityRef.current = r}}}
                className={`entity-element${selectedEntity === key ? " selected" : ""}`}
                onClick={()=>setSelectedEntity(key)}
                title={`Name: ${value.name}: Type: ${value.type} Category: ${value.category} Number of Resource Types Used: ${value.recipe ? value.recipe.ingredients.length : ""}`}
            >
                {value.name}
            </div>
        )
    }
    return elements;
}

export default Panel;
