import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, AppBar, Typography, Grow, Grid,} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import fetchItems from './actions/actions'

        


        const App = () => {
    const dispatch = useDispatch();
    const classes = makeStyles()

    useEffect(() => {
        dispatch(fetchItems)
    },[dispatch])
    return (
        <div>
            <h1>Le wat ?</h1>
        </div>
    )
}


export default App;