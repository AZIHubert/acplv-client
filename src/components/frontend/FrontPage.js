import React, {
    useEffect,
    useState
} from 'react';

import Navbar from './navbar/Navbar';
import Mouse from './Mouse/Mouse'

import { Route, Switch } from "react-router-dom";
import Home from './home/Home';
import About from './about/About';
import Project from './projects/Projects';
import Contact from './contact/Contact';
import Loader from './loader/Loader';


export default () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    })
    return (
        <>
            {isLoading ?
                <Loader />
            :
                <>
                    <Navbar />
                    <Mouse />
                    <Switch>
                        <Route path={'/about'} component={About} />
                        <Route path={'/projects'} component={Project} />
                        <Route path={'/contact'} component={Contact} />
                        <Route exact path={'/'} component={Home} />
                    </Switch>
                </>
            }
        </>
    );
};