import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { DeliveryForm} from './components/new-delivery.jsx'
import { Container, Grid,Grow, AppBar,Paper, Toolbar, Button } from '@material-ui/core'
import useStyles from './components/styles'
import './components/styles.css'
import image from './images/icon.ico'
import {Header} from './components/header' 




        const App = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [show, setShow] = useState(false)
    return (
    <div>
            <Header/>
            <div className={classes.appbarfix}/>
            <DeliveryForm show={show}/>                    
    </div>

    )
}


export default App;