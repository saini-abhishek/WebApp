import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DescriptionIcon from '@material-ui/icons/Description';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    wrapper: {
        padding: '20px',
    },
    list_block: {
        padding: '20px',
    },
}));

const SearchResults = () => {
    const classes = useStyles();

    const { value } = useParams();

    const archieves = useSelector(state => state);

    const searchResults = useMemo(() => _.filter(archieves, archieve =>
          _.includes(_.toLower(_.join(_.valuesIn(archieve), '')), _.toLower(value))));
    return (
        <div className={classes.wrapper}>
            <Typography variant="h4" noWrap>
                Showing results for : "{value}"
            </Typography>
            <div className={classes.list_block}>
                {_.map(searchResults, data => (
                    <MenuItem>
                        <ListItemIcon>
                            <DescriptionIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            {data.data} {data.year} {data.category}
                        </Typography>
                    </MenuItem>
                ))}        
            </div>
        </div>
    );
};

export default SearchResults;