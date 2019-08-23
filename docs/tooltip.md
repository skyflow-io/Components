## Usage

```
import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Tooltip } from "skyflow-react-components";

const Example = () =>{
    const [target, setTarget] = useState(null);
    const button = useRef(null);

    return (
        <React.Fragment>
            <button ref={button} onMouseOver={()=>setTarget(button.current)} onMouseOut={()=>setTarget(null)} >
                Over me
            </button>
            {
                target ? (
                    <Tooltip target={target} >
                        Lorem ipsum dolor Lorem ipsum dolor sit amet.
                    </Tooltip>
                ) : null
            }
        </React.Fragment>
    );

};
```