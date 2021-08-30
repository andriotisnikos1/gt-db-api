import { Paper, Typography, TextField, Button, Container, Grow, Grid  } from "@material-ui/core";
import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";
export const NewItem = (props) => {
    const classes = useStyles()
    const [formData, setFormData] = useState({
        _id: '',
        quantity: '',
        title: ''

    })
     




    if (!props.show) {
      return null
    }

    const handlesubmit = async(e) => {
        e.preventDefault()

        const id = formData._id
        const quantity = formData.quantity
        const name = formData.title

        try { 
          await api.createItem(id, quantity, name)
          setFormData({
            _id: '',
            quantity: '',
            title: ''
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
        <Typography variant="h6">ΝΕΟ ΠΡΟΙΟΝ</Typography>
        <TextField name="title" variant="outlined" label="ΟΝΟΜΑ ΠΡΟΙΟΝΤΟΣ" fullWidth value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})}/>
        <TextField name="id" variant="outlined" label="ΚΩΔΙΚΟΣ ΠΡΟΙΟΝΤΟΣ (ΜΗ ΥΠΑΡΧΟΝ)" fullWidth value={formData._id} onChange={(e) => setFormData({...formData, _id: e.target.value})}/>
        <TextField name="quantity" variant="outlined" label="ΠΟΣΟΤΗΤΑ" fullWidth value={formData.quantity} onChange={(e) => setFormData({...formData, quantity: e.target.value})}/>
        <Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button> 
      </form>
    </Paper>

            </Grid>
    </Grid>
</Container>    
</Grow>
  );
        
        
    

    
}