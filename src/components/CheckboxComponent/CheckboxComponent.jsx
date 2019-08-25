import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Helper from '../../Helper';
import './CheckboxComponent.scss';

/**
 * Custom checkbox and radio button
 *
 * @class Checkbox
 * @author Skyflow
 * @version 1.0.0
 */
const CheckboxComponent = (props) => {

    const [checked, setChecked] = useState(props.target ? props.target.checked : props.checked);
    const labelContainerRef = useRef(null);
    let inputRef = useRef(null);
    const markRef = useRef(null);
    const labelRef = useRef(null);

    const onChange = (e)=>{
        setChecked(inputRef.current.checked);
        const context = {
            e,
            dom: {
                container: labelContainerRef.current,
                input: props.target || inputRef.current,
                mark: markRef.current,
                label: labelRef.current,
            },
            checked: !checked,
            name: props.target ? (props.target.name || null) : props.name,
            value: props.target ? (props.target.value || null) : null,
            props
        };
        if(props.target){
            props.target.checked = context.checked
        }
        if(context.checked && Helper.isFunction(props.onCheck)){
            props.onCheck(context);
        }
        if(!context.checked && Helper.isFunction(props.onUncheck)){
            props.onUncheck(context);
        }
    };

    if(props.target){
        props.target.classList.add('component__checkbox-input');
    }

    return (
        <label
            className={
                'component__checkbox-container' + (props.classes ? (' ' + props.classes) : '') +
                (checked ? ' component__checkbox-is-checked' : '')
            }
            style={props.styles}
            ref={labelContainerRef}
        >
            <input type={'checkbox'} className={'component__checkbox-input'}
                   ref={inputRef}
                   name={props.name}
                   onChange={onChange}
                   checked={checked}
                   style={{display: 'none'}}
            />

            {
                !props.children ? <span className={'component__checkbox-mark'} ref={markRef}/> : null
            }

            {
                props.children ? (
                    <span className={'component__checkbox-line'}>
                        <span className={'component__checkbox-mark'} ref={markRef}/>
                        <span className={'component__checkbox-label'} ref={labelRef}>
                            {props.children || props.label}
                        </span>
                    </span>
                ) : null
            }
        </label>
    );
};

CheckboxComponent.defaultProps = {
    classes: null,
    styles: {},
    checked: false,
    name: null,
    target: null,
    onCheck: null,
    onUncheck: null,
};

CheckboxComponent.propTypes = {
    /**
     * Checkbox container classes
     */
    classes: PropTypes.string,
    /**
     * Checkbox inline styles
     */
    styles: PropTypes.object,
    /**
     * Set if Checkbox is checked or not
     */
    checked: PropTypes.bool,
    /**
     * Input name attribute
     */
    name: PropTypes.string,
    /**
     * Link checkbox input element to this component
     */
    target: PropTypes.instanceOf(HTMLInputElement),
    /**
     * Checkbox check event
     */
    onCheck: PropTypes.func,
    /**
     * Checkbox un-check event
     */
    onUncheck: PropTypes.func,
};

export default CheckboxComponent;