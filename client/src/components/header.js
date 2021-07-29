import { AppBar, Typography, Toolbar  } from "@material-ui/core";
import useStyles from './styles'
import image from '../images/icon.ico'
<<<<<<< HEAD
=======
import '../index.css'

>>>>>>> parent of 8334742 (z)
export const Header = () => {
    const classes = useStyles()
   return( 
    <AppBar className={classes.appbar}>
        <Toolbar>
        <img src={image} alt="gt icon" className={classes.ico} />
        </Toolbar>
    </AppBar>
    )
<<<<<<< HEAD
=======
}


export const Dropdown = () => {

>>>>>>> parent of 8334742 (z)
}