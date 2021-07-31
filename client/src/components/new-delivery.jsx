import { Paper, Typography, TextField, Button  } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles.jsx'

export const DeliveryForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        _id: '',
        quantity: ''

    })

    const handlesubmit = () => {

    }

    return(
        <Paper className={classes.formPaper}>
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handlesubmit}>
                <Typography variant="h6">Παραλαβή στην Αποθήκη</Typography>
                <TextField name="id" variant="outlined" fullWidth={formData._id} label={"Κωδικός Προιόντος"}></TextField>
                <TextField name="id" variant="outlined" fullWidth={formData._id} label={"Ποσότητα Που Παραλήφθηκε"}></TextField>
            </form>
        </Paper>
    )

    
}