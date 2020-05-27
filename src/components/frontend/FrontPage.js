import React, {
    useEffect,
    useState
} from 'react';
import {
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import Navbar from './navbar/Navbar';
import Mouse from './Mouse/Mouse';

import Home from './home/Home';
import About from './about/About';
import Project from './projects/Projects';
import Contact from './contact/Contact';
import Loader from './loader/Loader';
import NotFound from '../notFound/NotFound';

import {
    makeStyles
} from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    container: {
        overflowX: 'hidden'
    }
}))

export default () => {
    const classes = useStyles()
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    });
    return (
        <div className={classes.container}>
            {isLoading ?
                <Loader />
            :
                <>
                    <Navbar />
                    <Mouse />
                    <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/home'} render={() => (<Redirect to="/" />)} />
                        <Route path={'/about'} component={About} />
                        <Route path={'/projects'} component={Project} />
                        <Route path={'/contact'} component={Contact} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </>
            }
        </div>
    );
};