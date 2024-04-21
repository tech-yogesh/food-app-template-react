import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Tab, Tabs } from "@material-ui/core";
import MenuCard from "../Card";

import image1 from "../../asserts/images/image1.jpg";

const products = [
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 50.00,
    id: 1,
  },
  {
    name: "Food Two",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 100.00,
    id: 2,
  },
  {
    name: "Food three",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 500,
    id: 3,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 300.00,
    id: 4,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 700.00,
    id: 5,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 800.00,
    id: 6,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: 800.00,
    id: 7,
  },
];

const HomeMenu = () => {
    const dispatch = useDispatch()
    
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const addItem = (p)=>{
    dispatch({
        type:"ADD",
        data:p
    })
  }
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab disableRipple label="Fruit" />
          <Tab disableRipple label="Soft Drink" />
          <Tab disableRipple label="Desert" />
          <Tab disableRipple label="IceCreame" />

          <Tab disableRipple label="Curry" />
        </Tabs>
      </Grid>
      {value === 0 && (
        <Fragment>
          {products.slice(0, 1).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={8}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                addItem={()=>addItem(product)}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 1 && (
        <Fragment>
          {products.slice(1, 3).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={8}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                addItem={()=>addItem(product)}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 2 && (
        <Fragment>
          {products.slice(3, 6).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={8}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                addItem={()=>addItem(product)}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 3 && (
        <Fragment>
          {products.slice(1, 4).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={8}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                addItem={()=>addItem(product)}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 4 && (
        <Fragment>
          {products.map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={8}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
                addItem={()=>addItem(product)}
              />
            </Grid>
          ))}
        </Fragment>
      )}

    </Grid>
  );
};
export default HomeMenu;
