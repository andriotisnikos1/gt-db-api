import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Header } from './components/header.jsx'
import { DeliveryForm } from './components/new-delivery.jsx'
import { Container, Grid,Grow, AppBar,Paper } from '@material-ui/core'
import useStyles from './components/styles'





        const App = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
    <div>
            <Header/>
            <div className={classes.appbarfix}/>
                    <Grow in>
                        <Container>
                               <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
                                       <Grid item sm={7} xs={12}>
                                               <DeliveryForm/>
                                       </Grid>
                               </Grid>
                        </Container>
                    </Grow>      
    </div>

    )
}


export default App;