## Usage

```
import { Checkbox } from "skyflow-react-components";

const Example = () =>{

    return (
        <Checkbox
            onCheck={(context)=>{console.log(context)}}
            onUncheck={(context)=>{console.log(context)}}
            checked={false}
            target={document.getElementById('input')}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Eveniet, id!</a>
        </Checkbox>
    );

};
```