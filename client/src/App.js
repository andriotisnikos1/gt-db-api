import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Header } from './components/header.jsx'
import { DeliveryForm } from './components/new-delivery.jsx'
import { Container, Grid,Grow } from '@material-ui/core'
import useStyles from './components/styles'
        


        const App = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <div>
        <Header/>
            <Grow in>
                <Container>
                    <Grid sm={4} xs={12} className={classes.delForm}>
                        <DeliveryForm/>
                    </Grid>
                </Container>    
            </Grow>
        </div>
        

    )
}


export default App;