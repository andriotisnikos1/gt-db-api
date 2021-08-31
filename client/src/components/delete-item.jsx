import { Paper, Typography, TextField, Button, Container, Grow, Grid  } from "@material-ui/core";
import React, {useState} from "react";
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";
export const DeleteForm = (props) => {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        _id: '',

    })
     




    if (!props.show) {
      return null
    }

    const handlesubmit = async(e) => {
        e.preventDefault()

        const id = formData._id

        try { 
          await api.deleteItem(id)
          setFormData({
            _id: '',
            quantity: ''
          })
          window.location.reload()
        } catch (error) {
          alert('Υπήρξε πράβλημα στην βάση δεδομένων')
        }
    }

    return(
        
        

<Grow in >
<Container>
    <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
            <Grid item sm={7} xs={12}>

            <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.rootForm} ${classes.form}`} onSubmit={handlesubmit}>
        <Typography variant="h6">ΔΙΑΓΡΑΦΗ ΠΡΟΙΟΝΤΟΣ</Typography>
        <TextField name="creator" variant="outlined" label="ΚΩΔΙΚΟΣ ΠΡΟΙΟΝΤΟΣ" fullWidth value={formData._id} onChange={(e) => setFormData({...formData, _id: e.target.value})}/>
        <Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button> 
      </form>
    </Paper>

            </Grid>
    </Grid>
</Container>    
</Grow>
  );
        
        
    

    
}