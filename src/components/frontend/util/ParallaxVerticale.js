import React, {
    useRef,
    useEffect
} from 'react';

import {
    useSpring,
    animated
} from 'react-spring';

import {
    Box
} from '@material-ui/core';

const AnimatedBox = animated(Box);

const config = {
    mass: 5,
    friction: 400,
    tension: 1800
}

const transitionH = y => `translate3d(0px,${y}px,0px)`;
const transitionV = y => `translate3d(${y}px,0px,0px)`;

export default ({
    ratio = 1,
    relativeToPercent=false,
    children,
    verticale
}) => {
    const ref = useRef();
    const [props, set] = useSpring(() => ({
        y: 0,
        config
    }));
    const getY = () => {
        if(!!relativeToPercent){
            const refPos = ref.current.getBoundingClientRect();
            let zeroPos = refPos.top - (window.innerHeight * relativeToPercent)/100 + refPos.height/2;
            set({y: zeroPos * ratio});
        } else {
            const pageYOffset = window.pageYOffset;
            set({y: pageYOffset * ratio});
        }
    }
    useEffect(() => {
        getY()
        window.addEventListener('scroll', getY);
        return () => window.removeEventListener('scroll', getY);
    }, []);
    return (
        <AnimatedBox
            ref={ref}
            className="test"
            style={{
                transform: props.y.interpolate(verticale ? transitionV : transitionH)
            }}
        >
            {children}
        </AnimatedBox>
    )
}