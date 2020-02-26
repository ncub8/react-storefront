import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '300px'
  },
}));

export default ({product}) => {
  const classes = useStyles();
  return (
    <Grid item xs>
          <Paper className={classes.paper}>
          <img src={product.mobileImageURLs[0]} width="101" height="200" />
          <Typography>
            <Link to={{
              pathname: '/detail',
              state: {
                productInfo: product
            }}
            }>
              {product.productName}
          </Link>
          </Typography>
          <Typography>{product.price}</Typography>
          </Paper>
    </Grid>
  );

};