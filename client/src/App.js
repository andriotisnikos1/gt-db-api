import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { DeliveryForm} from './components/new-delivery.jsx'
import { Container, Grid,Grow, AppBar,Paper, Toolbar, Button } from '@material-ui/core'
import useStyles from './components/styles'
import './components/styles.css'
import image from './images/icon.ico'
import * as cs from './components/custom-scripts'
import { SynergeioForm } from './components/new-order.jsx'
import { NewItem } from './components/new-product.jsx'
import { getAll } from './actions/actions.js'




        const App = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    useEffect(() =>{
        console.log(dispatch(getAll()));
    },[dispatch])
    const [showDel, setShowDel] = useState(false)
    const [showSyn, setShowSyn] = useState(false)
    const [showNew, setShowNew] = useState(false)
    return (
    <div>
            <AppBar className={classes.appbar}>
        <Toolbar>
        <img src={image} alt="gt icon" className={classes.ico}/>
        <div>
              
             <Button variant="contained" color="primary" className={classes.tbBtnStyles} onClick={() => setShowDel(cs.newState(showDel))} disableElevation>ΝΕΑ ΠΑΡΑΛΑΒΗ</Button>
             <Button variant="contained" color="secondary" className={classes.tbBtnStyles} onClick={() => setShowSyn(cs.newState(showSyn))} disableElevation>ΝΕΟ ΣΥΝΕΡΓΕΙΟ</Button>
             <Button variant="contained" color="secondary" className={classes.tbBtnStyles} onClick={() => setShowNew(cs.newState(showNew))} disableElevation>ΝΕΟ ΠΡΟΙΟΝ</Button>
             <Button variant="outlined" className={classes.tbBtnStyles} disabled>Coming Soon</Button>
        </div>
        </Toolbar>
        </AppBar>
            <div className={classes.appbarfix}/>
            <DeliveryForm show={showDel}/>
            <SynergeioForm show={showSyn}/>
            <NewItem show={showNew} />
            <div height="1px"/>
            
            
                                
    </div>

    )
}


export default App;