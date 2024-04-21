import * as React from "react";
import { useSelector } from "react-redux";
import MenuAppBar from '../../components/Header';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// material-ui
import {
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

export default function Shipping() {
    const counter = useSelector(state => state.cart)
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          addressOne: '',
          addressTwo:'',
          city:'',
          zip:''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            lastName: Yup.string()
              .max(20, 'Must be 20 characters or less')
              .required('Required'),
              addressOne: Yup.string()
              .required('Required'),
              city: Yup.string()
              .required('Required'),
              zip: Yup.string()
              .required('Required'),
          }),
        onSubmit: values => {
          alert(JSON.stringify(values));
        },
      });
  return (
    <Grid container justifyContent="center" alignItems="center">
        <Grid item x={12}>
            <MenuAppBar/>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ maxWidth: "1024px" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
            Shipping address
          </Typography>
        </Grid>
      
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            fullWidth
            autoComplete="given-name"
            error={formik.errors.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastNameBasic"
            name="lastName"
            label="Last name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            fullWidth
            autoComplete="family-name"
            error={formik.errors.lastName && formik.errors.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addressOne"
            name="addressOne"
            label="Address line 1"
            fullWidth
            value={formik.values.addressOne}
            onChange={formik.handleChange}
            autoComplete="shipping address-line1"
            error={formik.errors.addressOne && formik.errors.addressOne}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addressTwo"
            name="addressTwo"
            label="Address line 2"
            value={formik.values.addressTwo}
            onChange={formik.handleChange}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cityBasic"
            name="city"
            label="City"
            fullWidth
            value={formik.values.city}
            onChange={formik.handleChange}
            autoComplete="shipping address-level2"
            error={formik.errors.city && formik.errors.city}
          />
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <TextField
            id="zipBasic"
            name="zip"
            value={formik.values.zip}
            onChange={formik.handleChange}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            error={formik.errors.zip && formik.errors.zip}
          />
        </Grid>
        <Grid item xs={12}>
            <Button color="primary" variant="outlined" size="small" type="submit" disabled={counter.length>0 ? false: true}>Place Order</Button>
        </Grid>
     
      </Grid>
      </form>
    </Grid>
  );
}
