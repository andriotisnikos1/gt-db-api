import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { DeliveryForm} from './components/new-delivery.jsx'
import { Container, Grid,Grow, AppBar,Paper, Toolbar, Button } from '@material-ui/core'
import useStyles from './components/styles'
import './components/styles.css'
import image from './images/icon.ico'
import * as cs from './components/custom-scripts'




        const App = (props) => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const [showDel, setShowDel] = useState(false)
    return (
    <div>
            <AppBar className={classes.appbar}>
        <Toolbar>
        <img src={image} alt="gt icon" className={classes.ico}/>
        <div>
              
             <Button variant="contained" color="primary" className={classes.tbBtnStyles} onClick={() => setShowDel(cs.newState(showDel))} disableElevation>ΝΕΑ ΠΑΡΑΛΑΒΗ</Button>
             <Button variant="contained" color="secondary" className={classes.tbBtnStyles} onClick={() => setShowDel(cs.newState(showDel))} disableElevation>ΣΥΝΕΡΓΕΙΟ Α</Button>
             <Button variant="contained" color="secondary" className={classes.tbBtnStyles} onClick={() => setShowDel(cs.newState(showDel))} disableElevation>ΣΥΝΕΡΓΕΙΟ Κ</Button>
             <Button variant="outlined" className={classes.tbBtnStyles} disabled>Coming Soon</Button>
        </div>
        </Toolbar>
        </AppBar>
            <div className={classes.appbarfix}/>
            <DeliveryForm show={showDel}/>                    
    </div>

    )
}


export default App;