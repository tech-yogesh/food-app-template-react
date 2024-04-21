import React, { useRef } from "react";
import { useSelector } from "react-redux";

// material-ui
import { Box, Button, Grid, Typography, Card } from "@material-ui/core";
import { Link } from "react-router-dom";

//-----------------------|| ORDER DETAILS ||-----------------------//

const OrderDetails = () => {
  const componentRef = useRef();
  const counter = useSelector(state => state.cart)

  // set selected tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // toggle write a review dialog
  const [open, setOpen] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const addAll = ()=>{
    let add = 0.00;
    if(counter.length>0){
      for(let i=0;i<counter.length;i++) {
        add = add + counter.price
      }
      return add
    }else{
        return 0;
    }
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Card title="ORDER STATUS">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={12} lg={10}>
              <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Order Place Date</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">{new Date().toLocaleDateString()}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Order Status</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">Processing</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Delivery Option</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">
                        Express Delivery
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Payment</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">Credit Card</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={2}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h5">Order Amount</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body2">{addAll()}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={4} lg={3}>
              
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Button>
                      <Link to="/shipping" disabled={counter.length>0 ? false: true}>
                        <Button variant="contained" color="primary" >
                          CheckOut
                        </Button>
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OrderDetails;
