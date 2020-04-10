import React from 'react'

// import SubHeaderWrapper from '../SubHeaderWrapper'

import SubComponentWrapper from '../../../util/SubComponentWrapper'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
    text: {
        textIndent: theme.spacing(5)
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <SubComponentWrapper>
            <Grid container>
                <Grid item xs={9}>
                    <Typography
                        variant="body2"
                        className={classes.text}
                    >
                        NOUS TRANSFORMONS L’IMAGE DE VOS LOCAUX,
                        COMMERCES ET VITRINES POUR OPTIMISER VOTRE IMPACT VISUEL.
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.text}
                    >
                        ACPLV EST UNE SOCIÉTÉ DE SOLUTION SIGNALÉTIQUE CRÉÉE EN 1995,
                        NOUS MAÎTRISONS TOUS LES MAILLONS DE LA CHAINE,
                        DE LA CONCEPTION À LA PRODUCTION JUSQU’À LA MISE EN PLACE SUR SITE ET
                        LA MAINTENANCE DE VOS SUPPORTS.
                        L’ÉQUIPE DE CRÉATEURS RÉPONDENT AU BESOINS LES PLUS EXIGEANTS GRÂCE
                        À LEUR RÉACTIVITÉ DE DÉPLOIEMENT DES SOLUTIONS DE HAUTE QUALITÉ D’IMPRESSION,
                        QUI S’ADAPTENT А TOUTES LES SURFACES.
                        QU’IL S’AGISSE DE PLV STANDARD ADAPTÉE OU PERSONNALISÉE,
                        OU DE SOLUTIONS SPÉCIFIQUES CRÉÉES SUR MESURE…
                    </Typography>
                </Grid>
            </Grid>
            
        </SubComponentWrapper>
    )
}