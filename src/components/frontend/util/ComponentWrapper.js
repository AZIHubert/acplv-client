import React, {useState, createRef, useEffect} from 'react'

import Footer from '../footer/Footer'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        minHeight: '100vh',
        position: 'relative',
    },
    wrapper: {
        margin: theme.spacing(0, 3)
    },
    title: {
        fontSize: '6rem'
    }
}))

export default ({children, title, theme}) => {
    const classes = useStyles(theme)
    const footerRef = createRef()
    const [footerHeight, setFooterHeight] = useState()
    useEffect(() => {
        const getFooterHeight = () => {
            if(footerRef.current !== null)
                setFooterHeight(footerRef.current.offsetHeight)
            else setFooterHeight(50)
        };
        getFooterHeight()
        window.addEventListener('resize', getFooterHeight)
        return () => {
            window.removeEventListener('resize', getFooterHeight);
        }
    }, [footerRef])
    return (
        <div
            className={classes.container}
            style={{paddingBottom: footerHeight}}
        >
            <div className={classes.wrapper}>
                {title && (
                    <Box
                        textAlign="center"
                    >
                        <Typography
                            variant="h1"
                            className={classes.title}
                        >
                            {title}
                        </Typography>
                    </Box>
                )}
                {children}
            </div>
            <Footer ref={footerRef} />
        </div>
    )
}