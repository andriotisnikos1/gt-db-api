import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Header } from './components/header.jsx'
import { DeliveryForm } from './components/new-delivery.jsx'
import { Container, Grid,Grow, AppBar,Paper } from '@material-ui/core'
import useStyles from './components/styles'
        


        const App = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
    <Container>
            <Header/>
        <Grow in>
        <Grid container alignItems="center">
            <div>
                <p>le wat ?</p>
            </div>
            </Grid>
        </Grow>
    </Container>

    )
}


export default App;