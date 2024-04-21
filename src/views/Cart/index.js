import React from 'react'
import { Grid,Typography } from '@material-ui/core';
import OrderList from '../../components/Table';
import OrderDetails from '../../components/Total';
const Cart = ()=>{
    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item={12}>
                <OrderList/>
            </Grid>
            <Grid item={12}>
                <OrderDetails/>
            </Grid>
        </Grid>
    )
}


export default Cart;