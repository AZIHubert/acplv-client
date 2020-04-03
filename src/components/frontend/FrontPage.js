import React from 'react'

import Navbar from './navbar/Navbar'

import { Route, Switch } from "react-router-dom"
import Home from './home/Home'
import About from './about/About'
import Project from './projects/Projects'
import Contact from './contact/Contact'

export default () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path={'/about'} component={About} />
                <Route path={'/projects'} component={Project} />
                <Route path={'/contact'} component={Contact} />
                <Route exact path={'/'} component={Home} />
            </Switch>
        </div>
    )
}