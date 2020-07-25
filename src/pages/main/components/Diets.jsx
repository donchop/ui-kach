import React from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardActionArea,
  Typography,
  CardContent,
  Grid,
} from "@material-ui/core";

import imgDiet from "../images/water.svg";

const useStyle = makeStyles({
  dietContainer: {
    background: "#1d1f2a",
    paddingTop: 80,
    paddingBottom: 80,
  },
  card: {
    maxWidth: 345,
    background: "transparent",
    color: "#fff",
    boxShadow: "none",
  },
  imageDiet: {
    height: 80,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  descriptionDiet: {
    color: "rgba(255,255,255,0.5)",
  },
});

const MainDiets = () => {
  const classes = useStyle();
  const history = useHistory();
  const diets = [
    {
      title: "Быстрая Диета",
      description:
        " Быстрая диета направлена на то, чтобы человек похудел как можно быстрее и у него не возникло серьёзных осложнений после перехода к обычному режиму питания.",
    },
    {
      title: "Диета 16/8",
      description:
        "Диета 16/8 это система питания, придерживаясь которой можно есть любимые продукты, но исключительно в определенное время дня.",
    },
    {
      title: "Секрет Жиробаса",
      description:
        " Быстрая диета направлена на то, чтобы человек похудел как можно быстрее и у него не возникло серьёзных осложнений после перехода к обычному режиму питания.",
    },
    {
      title: "Диета для Женщин",
      description:
        " Быстрая диета направлена на то, чтобы женщина похудела как можно быстрее и у него неё возникло серьёзных осложнений после перехода к обычному режиму питания.",
    },
  ];

  return (
    <Grid
      container
      direction="row"
      className={classes.dietContainer}
      justify="center"
    >
      {diets.map((diet, index) => (
        <Grid item key={index}>
          <Card className={classes.card}>
            <CardActionArea onClick={() => history.push("/diets")}>
              <img
                className={classes.imageDiet}
                src={imgDiet}
                alt="imgDietSvg"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  align="center"
                >
                  {diet.title}
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  component="p"
                  className={classes.descriptionDiet}
                >
                  {diet.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainDiets;
