import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import { Route, NavLink , BrowserRouter as Router } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    navbar: {
        display: 'flex',
        width: '100%',
        border: '1px solid'
    },
    navItemBlock: {
        display: 'flex',
    },
    ul: {
        display: 'flex',
        width: '300px',
        paddingLeft: '15px',
        justifyContent: 'space-between',
        '& li': {
            display: 'inline-block',
            minWidth: '50px',
        }
    },
    searchFieldBlock: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '24px',
    },
    search: {
        '& div': {
            height: '30px',
        }
    },
    dropDownBlock: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
        marginLeft: 'auto',
    },
    dropdown: {
        '& div': {
            height: '30px',
        }
    },
    active: {
        color: 'red',
        borderBottom: '3px solid red',
    },
}));


const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <div className={classes.navItemBlock}>
                <ul className={classes.ul}>
                    <NavLink exact activeClassName={classes.active} to="/"><li>Virtual Archive</li></NavLink>
                    <NavLink activeClassName={classes.active} to="/advanced-search"><li>Advanced Search</li></NavLink>
                    <NavLink activeClassName={classes.active} to="/browse"><li>Browse</li></NavLink>
                </ul>
            </div>
            <div className={classes.dropDownBlock}>
                <FormControl variant="outlined" className={classes.dropdown}>
                    <Select
                        native
                        value="All Virtual Archieve"
                        onChange={() => {}}
                    >
                    <option aria-label="None" value="" />
                    <option value="All Virtual Archieve">All Virtual Archieve</option>
                    <option value="All Virtual Archieve">All Virtual Archieve</option>
                    <option value="All Virtual Archieve">All Virtual Archieve</option>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.searchFieldBlock}>
                <TextField
                    variant="outlined"
                    className={classes.search}
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default NavBar;