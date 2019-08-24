import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ItemLineComponent.scss';

/**
 * Child component using by others components
 *
 * @class ItemLine
 * @author Skyflow
 * @version 1.0.0
 */
const ItemLineComponent = (props) => {
    const tooltipContainerRef = useRef(null);
    const tooltipContentRef = useRef(null);

    useEffect(() => {
        if(!tooltipContainerRef.current){
            return;
        }
        const tooltipContainer = tooltipContainerRef.current;
        const tooltipContent = tooltipContentRef.current;
        const tooltipContainerWidth = tooltipContainer.getBoundingClientRect().width;

        if(props.picture){
            tooltipContent.style.width = (tooltipContainerWidth - props.pictureSize) + 'px';
        }
    });

    return (
        <div className='component__item-line-container' ref={tooltipContainerRef}
             onClick={props.onClick}
             onMouseOver={props.onMouseOver}
             onMouseOut={props.onMouseOut}
        >
            {
                props.picture ? (
                    <div className={'component__item-line-picture'} style={{
                        width: props.pictureSize,
                        height: props.pictureSize,
                    }}>
                        <img src={props.picture} alt={props.pictureDesc}/>
                    </div>
                ) : null
            }
            <div className={'component__item-line-content'} ref={tooltipContentRef}>
                {props.children}
            </div>
        </div>
    );
};


ItemLineComponent.defaultProps = {
    picture: null,
    pictureDesc: '',
    pictureSize: 50,
    onClick: null,
    onMouseOver: null,
    onMouseOut: null,
};

ItemLineComponent.propTypes = {
    /**
     * Picture path
     */
    picture: PropTypes.string,
    /**
     * Picture description (alt value)
     */
    pictureDesc: PropTypes.string,
    /**
     * Size of picture (width and height)
     */
    pictureSize: PropTypes.number,
    /**
     * Click event
     */
    onClick: PropTypes.func,
    /**
     * Mouse over event
     */
    onMouseOver: PropTypes.func,
    /**
     * Mouse out event
     */
    onMouseOut: PropTypes.func,
};

export default ItemLineComponent;