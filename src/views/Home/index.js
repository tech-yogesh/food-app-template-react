import React from 'react'
import { Grid,Typography } from '@material-ui/core';
import SectionTitle from '../../components/SectionTitle';
import HomeMenu from '../../components/Menu';
import MenuAppBar from '../../components/Header';
const Home = ()=>{
    return (
        
        <Grid container justifyContent='center' alignItems='center'>
            <Grid style={{maxWidth:"1024px"}}>
            <Grid item={12}>
                <MenuAppBar/>
            </Grid>
            <Grid item={12}>
            <SectionTitle title="Our Menu" subtitle="xyz"/>
            </Grid>
            <Grid item={12}>
            <HomeMenu/>
            </Grid>
             
        </Grid>
        </Grid>
    )

}

export default Home;