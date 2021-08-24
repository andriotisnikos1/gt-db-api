import { Paper, Typography, TextField, Button, Container, Grow, Grid  } from "@material-ui/core";
import React, {useState} from "react";
import { useDispatch } from 'react-redux'
import useStyles from './styles.jsx'
import * as api from "../actions/actions.js";

const AllProducts = (props) => {
    const test = async() => {
        try {
            const products = await api.fetchAll()
            console.log(products)
        } catch (error) {
            console.log(error);
        }
    }
    test();
}