import React, {
    useState,
    useRef,
    useEffect
} from 'react'

import TitleLetter from './TitleLetter'

import {
    Box,
    Typography
} from '@material-ui/core'

import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        overflow: 'hidden'
    }
}));

export default ({title, theme}) => {
    const classes = useStyles(theme)
    const titleRef = useRef()
    const [isVisible, setIsVisible] = useState(false)
    const checkIfVisible = ({current}) => {
        const position = current.getBoundingClientRect();
        if(position.top >= (20 + 70) && position.bottom <= window.innerHeight - 20) {
            setIsVisible(true)
        }
    }
    useEffect(() => {
        checkIfVisible(titleRef);
        window.addEventListener('scroll', checkIfVisible.bind(this, titleRef))
        return () => window.removeEventListener('scroll', checkIfVisible.bind(this, titleRef))
    }, [])
    return (
        <Box
            ref={titleRef}
            display="flex"
            className={classes.container}
        >
        {[...title].map((c, i) => (
            <TitleLetter
                key={i}
                letter={c === ' ' ? '\u00A0' : c}
                delay={i*50}
                isVisible={isVisible}
            />
        ))}
        </Box>
    )
}