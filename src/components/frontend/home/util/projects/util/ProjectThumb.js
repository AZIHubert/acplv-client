import React, {useRef, useEffect, useState} from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `1px solid ${theme.palette.secondaryColor}`,
        paddingBottom: theme.spacing(1),
        marginBottom: theme.spacing(8)
    },
    thumbnailContainer: {
        width: '100%',
        height: 500,
        backgroundColor: theme.palette.tertiaryColor,
        backgroundImage: props => `url('${props.project.thumbnail}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        marginBottom: theme.spacing(1)
    }
}))

export default (props) => {
    const classes = useStyles(props)
    const {project} = props
    const thumbRef = useRef(null)
    const [thumbHeight, setThumbHeight] = useState()
    useEffect(() => {
        const resizeListener = () => {
            setThumbHeight(thumbRef.current.offsetWidth)
        };
        resizeListener()
        window.addEventListener('resize', resizeListener)
        return () => {
            window.removeEventListener('resize', resizeListener);
          }
      }, []);
    return (
        <div className={classes.container}
        ref={thumbRef}>
            <div
                className={classes.thumbnailContainer}
                style={{ height: thumbHeight }}
            >
            </div>
            <Box
                display="flex"
                justifyContent="space-between"
            >
                <Typography
                    variant="body2"
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body1"
                >
                    {project.type}
                </Typography>
            </Box>
        </div>
    )
}