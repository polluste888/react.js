import React from "react";
import Card from "../UI/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Tere tulemast tagasi!</h1>
    </Card>
  );
};

export default Home;
