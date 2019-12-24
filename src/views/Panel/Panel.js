import React from 'react';
import './Panel.css';

function Panel(props) {
    const { entities, selectedEntity, setSelectedEntity } = props;
    
    return (
        <div className="panel">
                {buildEntities({entities, setSelectedEntity, selectedEntity})}
        </div>
    );
}

const buildEntities = ({entities, setSelectedEntity, selectedEntity}) => {
    const elements = [];
    for(const [key, value] of entities) {
        elements.push(
            <div 
                key={key}
                className={`entity-element${selectedEntity === key ? " selected" : ""}`}
                onClick={()=>setSelectedEntity(key)}
            >
                {value}
            </div>
        )
    }
    return elements;
}

export default Panel;
