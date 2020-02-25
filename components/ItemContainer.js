import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Typography} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
const api = 'https://raw.githubusercontent.com/traa/apiplp/master/db.json';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ItemTile from './ItemTile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


export default () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFiltered] = useState([]);

   async function fetchMyAPI() {
      const result = await axios(api);
      setProducts(result.data.pageItems);
      setFiltered(result.data.pageItems);
    }

    useEffect(() => {
      fetchMyAPI();
    }, []);

  const classes = useStyles();

  if(!products) return null;

  const filterProducts = (evt) => {
    if(evt.target.value){
      setFiltered(products.filter((product) => {
        return product.productName.includes(evt.target.value)
      }))
    } else {
      setFiltered(products)
    }

  }

  const renderRows = () => {
    
    //todo: create pagination
    return filteredProducts.map((product, i) => {
      if(i < 10){
      return (<ItemTile product={product} key={product.code} />)
      }
      return null
    });
  }

  return (
    <div className={classes.root}>
      <TextField id="standard-basic" label="Filter" onChange={filterProducts} />
      
      <Grid container spacing={3}>
        {renderRows()}
      </Grid>
    </div>
  );

};