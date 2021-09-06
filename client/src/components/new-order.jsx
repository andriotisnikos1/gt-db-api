import { Paper, Typography, TextField, Button, Container, Grow, Grid  } from "@material-ui/core";
import React, {useState} from "react";
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";
export const SynergeioForm = (props) => {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        _id: '',
        quantity: '',
        code: ''

    })
     




    if (!props.show) {
      return null
    }

    const handlesubmit = async(e) => {
        e.preventDefault()

        const id = formData._id
        const quantity = formData.quantity

        try { 
          await api.updateQuantityRemove(id, quantity)
          setFormData({
            _id: '',
            quantity: '',
            code: ''
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
        <Typography variant="h6">ΝΕΟ ΣΥΝΕΡΓΕΙΟ</Typography>
        <TextField name="id" variant="outlined" label="ΚΩΔΙΚΟΣ ΠΡΟΙΟΝΤΟΣ" fullWidth value={formData._id} onChange={(e) => setFormData({...formData, _id: e.target.value})}/>
        <TextField name="Quantity" variant="outlined" label="ΠΟΣΟΤΗΤΑ" fullWidth value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})}/>
        <TextField name="code" variant="outlined" label="ΚΩΔΙΚΟΣ ΣΥΝΕΡΓΕΙΟΥ" fullWidth value={formData.code} onChange={(e) => setFormData({...formData, code: e.target.value})}/>
        <Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>

            </Grid>
    </Grid>
</Container>    
</Grow>
  );
        
        
    

    
}