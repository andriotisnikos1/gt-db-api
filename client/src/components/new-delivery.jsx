import { Paper, Typography, TextField, Button  } from "@material-ui/core";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";

export const DeliveryForm = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        _id: '',
        quantity: null,

    })

    const handlesubmit = async(e) => {
        e.preventDefault()

        const id = formData._id
        const quantity = formData.quantity

        await api.updateItems(id, quantity)
    }

    return(
        <Paper className={classes.formPaper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handlesubmit}>
                <Typography variant="h6">Παραλαβή στην Αποθήκη</Typography>
                <TextField name="id" variant="outlined" fullWidth={formData._id} label={"Κωδικός Προιόντος"}/>
                <TextField name="id" variant="outlined" fullWidth={formData.quantity} label={"Ποσότητα Που Παραλήφθηκε"}/>
                <Button fullWidth variant="contained" color="default" size="large" type="submit"></Button>
            </form>
        </Paper>
    )

    
}