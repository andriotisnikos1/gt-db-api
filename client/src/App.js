import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid,} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Header } from './components/header.jsx'

        


        const App = () => {
    const dispatch = useDispatch()
    const classes = makeStyles()

    return (
        <div>
        <Header/>
        </div>
    )
}


export default App;