import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './TooltipComponent.scss';

const TooltipComponent = (props) => {

    const tooltipContainerRef = useRef(null);
    const tooltipContentRef = useRef(null);

    useEffect(() => {
        if(!props.picture){
            return;
        }
        const tooltipContainer = tooltipContainerRef.current;
        const tooltipContent = tooltipContentRef.current;
        const tooltipContainerWidth = tooltipContainer.getBoundingClientRect().width;
        tooltipContent.style.width = (tooltipContainerWidth - props.pictureSize) + 'px';
    });

    return (
        <div className={'component__tooltip-container'} ref={tooltipContainerRef} data-placement={props.placement}>
            <span className={'component__tooltip-arrow'}/>
            {
                props.picture ? (
                    <div className={'component__tooltip-picture'} style={{width: props.pictureSize, height: props.pictureSize}}>
                        <img src={props.picture} alt={props.pictureDesc}/>
                    </div>
                ) : null
            }
           <div className={'component__tooltip-content'} ref={tooltipContentRef}>
               {props.children}
           </div>
        </div>
    );
};

TooltipComponent.defaultProps = {
    picture: null,
    pictureDesc: '',
    pictureSize: 50,
    placement: 'bottom',
    x: 0,
    y: 0,
};

TooltipComponent.propTypes = {
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
     * Tooltip placement
     */
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    /**
     * Tooltip horizontal position
     */
    x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Tooltip vertical position
     */
    y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};


export default TooltipComponent;