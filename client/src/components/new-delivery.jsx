import { Paper, Typography, TextField, Button, Container, Grow, Grid  } from "@material-ui/core";
import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";
export const DeliveryForm = (props) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        _id: '',
        quantity: '',

    })
     




    if (!props.show) {
      return null
    }

    const handlesubmit = async(e) => {
        e.preventDefault()

        const id = formData._id
        const quantity = formData.quantity

        try { 
          await api.updateQuantityAdd(id, quantity)
        } catch (error) {
          Notification('Υπήρξε πράβλημα στην βάση δεδομένων')
        }
    }

    return(
        
        

<Grow in >
<Container className={`delform`}>
    <Grid container justifyContent="space-between" alignItems="stretch" spacing={1}>
            <Grid item sm={7} xs={12}>

            <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.rootForm} ${classes.form}`} onSubmit={handlesubmit}>
        <Typography variant="h6">ΝΕΑ ΠΑΡΑΛΑΒΗ</Typography>
        <TextField name="creator" variant="outlined" label="ΚΩΔΙΚΟΣ ΠΡΩΙΟΝΤΟΣ" fullWidth value={formData._id} onChange={(e) => setFormData({... formData, _id: e.target.value})}/>
        <TextField name="title" variant="outlined" label="ΠΟΣΟΤΗΤΑ" fullWidth value={formData.quantity} onChange={(e) => setFormData({... formData, quantity: e.target.value})}/>
        <Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>

            </Grid>
    </Grid>
</Container>    
</Grow>
  );
        
        
    

    
}