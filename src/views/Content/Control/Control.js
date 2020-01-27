import React from 'react';
import './Control.css';

/**
 *       Need to program for productivity modules.
 *       Need to insert constants into below html.
 * @param {*} props
 */

function Control(props) {
    const { stepsShown, setStepsShown } = props;
    const handleChange = (event) => setStepsShown(event.target.value);
    return (
        <div className="control">
            Recipe steps
            {<input type="number" value={stepsShown} onChange={handleChange} className="steps"/>}
        </div>
    );
}

export default Control;
