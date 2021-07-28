import { AppBar, Typography, Toolbar  } from "@material-ui/core";
import useStyles from './styles'
import image from '../images/icon.ico'
export const Header = () => {
    const classes = useStyles()
   return( 
    <AppBar className={classes.appbar}>
        <Toolbar>
        <img src={image} alt="gt icon" className={classes.ico} />
        </Toolbar>
    </AppBar>
    )
}