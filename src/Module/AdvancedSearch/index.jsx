import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider  } from "@material-ui/pickers";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'inherit',
    },
    paper: {
        justifyContent: 'center',
        height: '400px',
        width: '80%',
    },
    heading: {
        fontWeight: 'bold',
    },
    heading_block: {
        padding: '10px 0px 0px 40px',
        display: 'flex',
        width: 'auto',
        heigth: '50px',
    },
    form_block: {
        paddingLeft: '20px',
    },
    inputField: {
        '& div': {
            height: '30px',
        }
    },
    label: {
        width: '200px',
        display: 'inline-block',
        textAlign: 'end',
        paddingRight: '10px',
    },
    input_block: {
        marginTop: '10px',
    },
    action_block: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'flex-end',
        paddingRight: '100px',
    },
    searchBtn: {
        marginLeft: '10px',
    },
    categoryandType: {
        width: '450px',
    },
    businessAndCompany: {
        width: '450px',
    },
}));

const AdvancedSearch = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper variant="outlined" className={classes.paper} >
                <div className={classes.heading_block}>
                    <Typography variant="body" className={classes.heading}>
                        Search The Virtual Archieve
                    </Typography>
                </div>
                <div className={classes.form_block}>
                        <div className={classes.input_block}>
                            <div className={classes.label}>
                                <Typography variant="body">
                                    All of these words:
                                </Typography>
                            </div>
                            <TextField variant="outlined" className={classes.inputField}></TextField>
                        </div>
                        <div className={classes.input_block}>
                            <div className={classes.label}>
                                <Typography variant="body">
                                    The exact phrase:
                                </Typography>
                            </div>
                            <TextField variant="outlined" className={classes.inputField}></TextField>
                        </div>
                        <div className={classes.input_block}>
                            <div className={classes.label}>
                                <Typography variant="body">
                                    Any of these words:
                                </Typography>
                            </div>
                            <TextField variant="outlined" className={classes.inputField}></TextField>
                        </div>
                        <div className={classes.input_block}>
                            <div className={classes.label}>
                                <Typography variant="body" >
                                    Business and Company:
                                </Typography>
                            </div>
                            <TextField variant="outlined" className={clsx(classes.inputField, classes.businessAndCompany)} />
                        </div>
                        <div className={classes.input_block}>
                            <div className={classes.label}>
                                <Typography variant="body">
                                    Category and Type:
                                </Typography>
                            </div>
                            <TextField variant="outlined" className={clsx(classes.inputField, classes.categoryandType)} />
                        </div>
                        <div className={classes.action_block}>
                            <Button
                                color="primary"
                                variant="outlined"
                            >
                                Clear
                            </Button>
                            <Button
                                className={classes.searchBtn}
                                color="Secondary"
                                variant="outlined"
                            >
                                Search
                            </Button>
                        </div>
                        {/* <div>
                            <Typography variant="body">
                                Between Dates:
                            </Typography>
                            <TextField
                                id="date"
                                label="from"
                                type="date"
                                variant="outlined"
                                placeholder={false}
                            />
                        </div> */}
                </div>
            </Paper>
        </div>
    );
};

export default AdvancedSearch;