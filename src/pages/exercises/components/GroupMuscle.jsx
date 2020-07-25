import React from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    width: 300,
    background: "transparent",
    boxShadow: "none",
    marginTop: 25,
    marginBottom: 25,
  },
  cardArea: {
    "&:hover": {
      background: "rgba(0, 0, 0, 0.3)",
    },
  },
  imageMuscle: {
    height: "50%",
    display: "block",
    paddingTop: 15,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#fff",
  },
});

const GroupMuscle = ({ title, imgSrc }) => {
  const styles = useStyles();
  const history = useHistory();

  return (
    <Card className={styles.card}>
      <CardActionArea
        onClick={() => history.push("/exercises")}
        className={styles.cardArea}
      >
        <img className={styles.imageMuscle} src={imgSrc} alt="imgDietSvg" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={styles.title}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default GroupMuscle;
