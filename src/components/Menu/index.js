import React, { useState, Fragment } from "react";

import { Grid, Tab, Tabs } from "@material-ui/core";
import MenuCard from "../Card";

import image1 from "../../asserts/images/image1.jpg";

const products = [
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: "$49.00",
    id: 1,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: "$49.00",
    id: 1,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: "$49.00",
    id: 1,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: "$49.00",
    id: 1,
  },
  {
    name: "Food One",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took",
    image: image1,
    price: "$49.00",
    id: 1,
  },
];

const HomeMenu = () => {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <Grid container spacing={4} className="container">
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
          <Tab disableRipple label="Rice" />
          <Tab disableRipple label="Curry" />
        </Tabs>
      </Grid>
      {value === 0 && (
        <Fragment>
          {products.map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 1 && (
        <Fragment>
          {products.slice(1, 6).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 2 && (
        <Fragment>
          {products.slice(0, 4).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 3 && (
        <Fragment>
          {products.slice(1, 4).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 4 && (
        <Fragment>
          {products.map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Fragment>
      )}
      {value === 5 && (
        <Fragment>
          {products.slice(0, 3).map((product, i) => (
            <Grid key={i} item lg={4} sm={6} xs={12}>
              <MenuCard
                id={product.id}
                name={product.name}
                description={product.description}
                image={product.image}
                price={product.price}
              />
            </Grid>
          ))}
        </Fragment>
      )}
    </Grid>
  );
};
export default HomeMenu;
