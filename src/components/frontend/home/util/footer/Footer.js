import React, {useEffect, useState} from 'react'

import Email from './util/Email'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    container: {
        height: `calc(100vh - ${theme.custom.navbarHeight}px - ${theme.custom.footerHeight}px)`,
        position: 'relative',
    },
    letsChatText: {
        fontSize: '4.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            paddingBottom: theme.spacing(1),
        },
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    const [showEmail, setShowEmail] = useState(false)
    useEffect(() => {
        document.fonts.ready.then(() => setShowEmail(true))
    }, [])
    return (
        <Box
            className={classes.container}
            display="flex"
            flexDirection="column"
        >
            <Box
                flexGrow={1}
                className={classes.contactContainer}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Box>
                    <Typography
                        variant="h1"
                        className={classes.letsChatText}
                    >
                        let's chat!
                    </Typography>
                    {showEmail && <Email /> }
                </Box>
            </Box>
        </Box>
    )
}