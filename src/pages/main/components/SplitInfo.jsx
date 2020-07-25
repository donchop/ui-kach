import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Button,
  Container,
  Hidden,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import classNames from "classnames";

import bestProgramImg from "../images/bestProgramImg.jpg";

const useStyle = makeStyles({
  infoBlock: {
    marginTop: 80,
  },
  title: {
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 30,
  },
  text: {
    color: "#64677c",
  },
  ul: {
    listStyleType: "none",
    lineHeight: 2,
  },
  liIcon: {
    color: "#ff9908",
    border: "1px solid #ff9908 ",
    borderRadius: 100,
    marginRight: 15,
  },
  imgInfo: {
    width: "100%",
    height: "900px",
    display: "block",
  },
  button: {
    color: "#fff",
    fontWeight: 600,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 30,
    marginBottom: 30,
    background: "#ff9908",
    "&:hover": {
      background: "#dc3545",
    },
    "@media (max-width: 960px)": {
      width: "100%",
    },
  },
});

const SplitInfo = () => {
  const classes = useStyle();
  const history = useHistory();

  return (
    <Grid container>
      <Grid item container xs={12} md={6}>
        <Container spacing="1">
          <Grid className={classes.infoBlock}>
            <Typography variant="h3" className={classes.title}>
              Лучшая программа тренировок на массу
            </Typography>
            <Typography variant="body1" className={classes.text}>
              Сплит можно составить на 2-7 дней. Также для опытных спортсменов
              допустима сплит-программа, в которой одна мышечная группа
              прорабатывается больше одного раза в неделю. Наша система
              построена по-другому, в ней каждая мышца нагружается один в раз в
              неделю. Это гарантирует полное восстановление перед следующей
              тренировкой. Такой подход приведет к росту качественной мышечной
              массы.
            </Typography>
            <ul className={classNames(classes.ul, classes.text)}>
              <li>
                <CheckIcon className={classes.liIcon} /> Подходит новичкам.
              </li>
              <li>
                <CheckIcon className={classes.liIcon} /> Быстрая загрузка мышц.
              </li>
              <li>
                <CheckIcon className={classes.liIcon} /> Ещё что-то очень важное.
              </li>
              <li>
                <CheckIcon className={classes.liIcon} /> Работают все группы
                мышц.
              </li>
            </ul>
            <Button
              className={classes.button}
              onClick={() => history.push("/programs")}
            >
              Перейти
            </Button>
          </Grid>
        </Container>
      </Grid>
      <Hidden smDown>
        <Grid item xs={false} md={6}>
          <img
            src={bestProgramImg}
            alt="BEST PROGRAM"
            className={classes.imgInfo}
          />
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default SplitInfo;
