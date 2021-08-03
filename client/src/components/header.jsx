import { AppBar, Toolbar, Button  } from "@material-ui/core" ;
import useStyles from './styles'
import image from '../images/icon.ico'
export const Header = () => {
    const classes = useStyles()
   return( 
    <AppBar className={classes.appbar}>
        <Toolbar>
        <img src={image} alt="gt icon" className={classes.ico}/>
        <Buttons />
        </Toolbar>
    </AppBar>
    )
}


export const Buttons = () => {
    const classes = useStyles()
    return(
        <div>
              
             <Button variant="contained" color="primary" className={classes.tbBtnStyles} disableElevation>ΝΕΑ ΠΑΡΑΛΑΒΗ</Button>
             <Button variant="contained" color="secondary" className={classes.tbBtnStyles} disableElevation>ΣΥΝΕΡΓΕΙΟ Α</Button>
             <Button variant="contained" color="secondary" className={classes.tbBtnStyles} disableElevation>ΣΥΝΕΡΓΕΙΟ Κ</Button>
             <Button variant="outlined" className={classes.tbBtnStyles} disabled>Coming Soon</Button>
        </div>
    )
}