## Usage

#### With checkbox

```
import { Checkbox } from "skyflow-react-components";

const Example = () =>{

    return (
        <Checkbox
            onCheck={(context)=>{console.log(context)}}
            onUncheck={(context)=>{console.log(context)}}
            checked={false}
            target={document.getElementById('myInputCheckbox')}
        >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#">Eveniet, id!</a>
        </Checkbox>
    );

};
```

#### With radio

```
import { Checkbox } from "skyflow-react-components";

const Example = () =>{

    return (
        <Checkbox type={'radio'} name={'fruits'} checked={true}>
            Tomato
        </Checkbox>
        <Checkbox type={'radio'} name={'fruits'}>
            Mango
        </Checkbox>
    );

};
```