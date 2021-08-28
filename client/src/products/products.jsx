import React from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './products-styles'
import Product from './product/product'
const Products = () => {
    const products = useSelector((state) => state.products)
    const classes = useStyles()

    return (
        !products.length ? <CircularProgress/> : (
            <Grid container className={classes.grid} alignItems="stretch" spacing={3}>
                {
                    products.map((pr) => (
                        <Grid item key={pr._id} xs={12} sm={6} md={6}>
                            <Product details={pr}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}
export default Products 