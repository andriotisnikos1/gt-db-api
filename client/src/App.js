import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid,} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fetchItems from './actions/actions'
import { Header } from './components/header'

        


        const App = () => {
    const dispatch = useDispatch()
    const classes = makeStyles()

    useEffect(() => {
        dispatch(fetchItems())
    },[dispatch])
    return (
        <div>
        <Header/>
        </div>
    )
}


export default App;