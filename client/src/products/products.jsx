import React from 'react';
import {Grid, CircularProgress, Container, Grow, Paper, Typography} from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from '../components/styles'
const Products = () => {
    const products = useSelector((state) => state.products)
    const classes = useStyles()
    return (
        <div>
            <div>
                {
                    products.map(product => (
                        
<Grow in >
<Container>
    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item>

            <Paper >
                        <div>
                           <table>
                           <td><div className={classes.b}><span className={classes.a}>Όνομα: {product.name}</span></div></td>
                            <td><div className={classes.b}><span className={`${classes.a} ${classes.ab}`}>Κωδικός: {product._id}</span></div></td>
                            <td><div className={classes.b}><span className={`${classes.a} ${classes.abc}`}>Ποσότητα: {product.quantity}</span></div></td>
                           </table>
                        </div>
                        </Paper> 

            </Grid>
    </Grid>
</Container>    
</Grow>
                    ))
                }
            </div>
        </div>
    )
}
export default Products 