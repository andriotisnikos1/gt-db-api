import { Paper, Typography, TextField, Button, Container, Grow, Grid  } from "@material-ui/core";
import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";

    export const test = async() => {
        try {
            const products = await api.getAll()
            return console.log(products)
        } catch (error) {
            console.log(error);
        }
    }