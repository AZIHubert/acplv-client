import React from 'react';
import clsx from 'clsx';

import {NavLink} from 'react-router-dom'

import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WorkIcon from '@material-ui/icons/Work';

import InfoIcon from '@material-ui/icons/Info';
import MoodIcon from '@material-ui/icons/Mood';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    drawer: {
        width: theme.custom.drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerColor: {
        backgroundColor: theme.palette.primaryColor,
        borderRight: `1px solid ${theme.palette.secondaryColor}`,
    },
    drawerOpen: {
        width: theme.custom.drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        })
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      listItem: {
        '&.active': {
            '& .MuiSvgIcon-root, & span': {
                color: theme.palette.tertiaryColor
            }
        }
      },
      icon: {
          color: theme.palette.secondaryColor,
          fontSize: 40
      },
      text: {
          color: theme.palette.secondaryColor,
          '& span': {
              fontSize: '1.6rem'
          }
      }
}));

export default ({open, handleDrawerClose}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            })}
            classes={{
                paper: clsx(classes.drawerColor, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ?
                        <ChevronRightIcon className={classes.icon} /> :
                        <ChevronLeftIcon className={classes.icon} />
                    }
                </IconButton>
            </div>
            <List>
                <ListItem button
                    component={NavLink} to="/backend"
                    className={classes.listItem}
                    exact
                >
                    <ListItemIcon className={classes.iconContainer} >
                        <HelpOutlineIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={'general'} className={classes.text}  />
                </ListItem>
                <ListItem button
                    component={NavLink} to="/backend/about"
                    className={classes.listItem}
                >
                    <ListItemIcon className={classes.iconContainer} >
                        <InfoIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={'about'} className={classes.text}  />
                </ListItem>
                <ListItem button
                    component={NavLink} to="/backend/services"
                    className={classes.listItem}
                >
                    <ListItemIcon className={classes.iconContainer} >
                        <ImportContactsIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={'services'} className={classes.text}  />
                </ListItem>
                <ListItem button
                    component={NavLink} to="/backend/projects"
                    className={classes.listItem}
                >
                    <ListItemIcon className={classes.iconContainer} >
                        <WorkIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={'projects'} className={classes.text}  />
                </ListItem>
                <ListItem button
                    component={NavLink} to="/backend/clients"
                    className={classes.listItem}
                >
                    <ListItemIcon className={classes.iconContainer} >
                        <MoodIcon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={'clients'} className={classes.text}  />
                </ListItem>
            </List>
        </Drawer>
    );
    
};