import { Paper, Typography, TextField, Button, Container  } from "@material-ui/core";
import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";

export const DeliveryForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        _id: '',
        quantity: '',

    })

    const handlesubmit = async(e) => {
        e.preventDefault()

        const id = formData._id
        const quantity = formData.quantity

        await api.updateQuantityRemove(id, quantity)
    }

    return(
        
        <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.rootForm} ${classes.form}`} onSubmit={handlesubmit}>
        <Typography variant="h6"></Typography>
        <TextField name="creator" variant="outlined" label="ΚΩΔΙΚΟΣ ΠΡΩΙΟΝΤΟΣ" fullWidth value={formData._id} onChange={(e) => setFormData({... formData, _id: e.target.value})}/>
        <TextField name="title" variant="outlined" label="ΠΟΣΟΤΗΤΑ" fullWidth value={formData.quantity} onChange={(e) => setFormData({... formData, quantity: e.target.value})}/>
        <Button className={classes.buttonSubmit} variant="contained" color="default" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
        
        
    

    
}