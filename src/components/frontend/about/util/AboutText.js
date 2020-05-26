import React from 'react'

import {
    Grid
} from '@material-ui/core';

import {
    makeStyles
} from '@material-ui/core/styles';

import SubComponentWrapper from '../../util/SubComponentWrapper';

import ParagraphAnimate from '../../util/ParagraphAnimate';


const useStyles = makeStyles(theme => ({
    text: {
        textIndent: theme.spacing(5)
    },
    p: {
        position: 'relative'
    }
}))

export default ({theme}) => {
    const classes = useStyles(theme)
    return (
        <SubComponentWrapper
            paddingTop
            paddingBottom
        >
            <Grid
                container
            >
                <Grid item xs={12} md={9}>
                    <ParagraphAnimate
                        variant="body2"
                        customClass={classes.text}
                    >
                        NOUS TRANSFORMONS L’IMAGE DE VOS LOCAUX,
                        COMMERCES ET VITRINES POUR OPTIMISER VOTRE IMPACT VISUEL.
                    </ParagraphAnimate>
                    <ParagraphAnimate
                        variant="body1"
                        customClass={classes.text}
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
                    </ParagraphAnimate>
                </Grid>
            </Grid>
        </SubComponentWrapper>
    )
}