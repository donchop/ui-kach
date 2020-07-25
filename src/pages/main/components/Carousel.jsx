import React from "react";
import img1 from "../images/index1.jpg";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  imgCarousel: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${img1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },

  phrase: {
    position: "absolute",
    top: 300,
    left: 200,
    width:"30%",
    "@media (max-width: 960px)": {
      top:150,
      left: 50,
      width:"80%"
    },
  },
  text: {
    lineHeight: 1.5,
    color: "white",
    fontWeight: 500,
  },
  button: {
    color: "#fff",
    fontWeight: 600,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    background: "#ff9908",
    "&:hover": {
      background: "#dc3545",
    },
    "@media (max-width: 540px)": {
      width:"100%"
    },
  },
});

const Carousel = () => {
  const classes = useStyle();
  const history = useHistory();
  return (
    <div className={classes.imgCarousel}>
      <div className={classes.phrase}>
        <Typography variant="h4" className={classes.text}>
          Новая программа тренировок - 'New Life'. Попробуй сейчас !
        </Typography>
        <Button
          className={classes.button}
          onClick={() => history.push("/programs")}
        >
          Перейти
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
