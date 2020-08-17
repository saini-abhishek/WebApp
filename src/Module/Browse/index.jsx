import React, { Fragment } from 'react';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';

import { fetchArchieveByCategory, fetchArchieveByYear, fetchArchieveByCompanyDictonary } from '../../Action';

const useStyles = makeStyles((theme) => ({
    browse_block: {
        marginTop: '20px',
    },
    root: {
        width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    categories_acc_details: {
        flexDirection: 'column',
    },
    inner_block: {
        marginTop: '20px',
    },
}));


const Browse = () => {
    const classes = useStyles();
    const categories = ['Agent', 'corporate'];
    const byDate = [
        {fromYear: 1980, toYear: 1990},
        {fromYear: 1990, toYear: 2000},
        {fromYear: 2000, toYear: 2010},
        {fromYear: 2010, toYear: 2020},
    ];
    
    const byKey = [
        {fromKey: 'A', toKey: 'F'},
        {fromKey: 'F', toKey: 'L'},
        {fromKey: 'L', toKey: 'X'},
        {fromKey: 'X', toKey: 'Z'},
    ];

    const dispatch = useDispatch();
    const {archieves} = useSelector((store) => ({
        archieves : store
    }));

    const ArchieveByCategory = (type) => {
        fetchArchieveByCategory(type, dispatch);
    };

    const ArchieveByYear = (fromYear, toYear) => {
        fetchArchieveByYear(fromYear, toYear, dispatch);
    };

    const ArchieveByKeys = (fromKey, toKey) => {
        fetchArchieveByCompanyDictonary(fromKey, toKey, dispatch);
    };


    return (
        <div className={classes.browse_block}>
            <Typography variant="h6" color="secondary">Browse</Typography>
            <Typography variant="body1" >
                You can browse the archive by using one of three methods: by business, by category(to find different type of records) or through the company Dictonary.
            </Typography>
            <div className={classes.inner_block}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>Business</Typography>
                    </AccordionSummary >
                    <AccordionDetails className={classes.categories_acc_details}>
                        {_.map(archieves, (archieve) => (
                            <Fragment>
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes.heading}>{archieve.data}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <br/>
                            </Fragment>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <br/>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Categories</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.categories_acc_details}>
                        {_.map(categories, (category) => (
                            <Fragment>
                            <div>
                                <Accordion
                                    onChange={(event, expanded) => expanded && ArchieveByCategory(category)}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes.heading}>{category}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.categories_acc_details}>
                                    {_.map(archieves, (archieve) => (
                                        <Fragment>
                                        <div>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    >
                                                    <Typography className={classes.heading}>{`${archieve.data} : ${archieve.category}`}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <br/>
                                        </Fragment>
                                    ))}
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <br/>
                            </Fragment>
                        ))}    
                    </AccordionDetails>
                </Accordion>
                <br/>
                
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Company Dictonary</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.categories_acc_details}>
                    {_.map(byKey, (key) => (
                            <Fragment>
                            <div>
                                <Accordion
                                    onChange={(event, expanded) => expanded && ArchieveByKeys(key.fromKey, key.toKey)}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes.heading}>{`${key.fromKey} - ${key.toKey}`}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.categories_acc_details}>
                                    {_.map(archieves, (archieve) => (
                                        <Fragment>
                                        <div>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    >
                                                    <Typography className={classes.heading}>{`${archieve.data} (${archieve.year})`}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {`${archieve.data} - ${archieve.year} - ${archieve.category}`}
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <br/>
                                        </Fragment>
                                    ))}
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <br/>
                            </Fragment>
                        ))}
                    </AccordionDetails>
                </Accordion>
                <br/>
                
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Company Dictonary (By Date)</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.categories_acc_details}>
                    {_.map(byDate, (date) => (
                            <Fragment>
                            <div>
                                <Accordion
                                    onChange={(event, expanded) => expanded && ArchieveByYear(date.fromYear, date.toYear)}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        >
                                        <Typography className={classes.heading}>{`${date.fromYear} - ${date.toYear}`}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.categories_acc_details}>
                                    {_.map(archieves, (archieve) => (
                                        <Fragment>
                                        <div>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    >
                                                    <Typography className={classes.heading}>{`${archieve.data} (${archieve.year})`}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {`${archieve.data} - ${archieve.year} - ${archieve.category}`}
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                        <br/>
                                        </Fragment>
                                    ))}
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                            <br/>
                            </Fragment>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default Browse;