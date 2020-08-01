import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { editExercise, getExercise } from "../../exercises/actions/exercises";
import {
  TextField,
  makeStyles,
  Container,
  Grid,
  TextareaAutosize,
  Button,
  Box,
  CircularProgress,
  MenuItem,
} from "@material-ui/core";
import Alert from "../../../components/alert";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5%",
  },
  exerciseBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  muscleGroupContainer: {
    width: "100%",
    marginLeft: "30%",
  },
  input: {
    marginTop: "20px",
    "& label.Mui-focused": {
      color: "#ff9908",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ff9908",
      },
    },
    width: "70%",
    "@media (max-width: 540px)": {
      width: "90%",
    },
  },
  textArea: {
    width: "70%",
    marginTop: "2%",
    resize: "vertical",
    fontSize: "1.4rem",
    borderRadius: 4,
    padding: "5px",
    borderColor: "rgba(0,0,0,.2)",
    "&:hover": {
      borderColor: "rgb(0,0,0)",
    },
    "&:focus": {
      outline: "1px solid #ff9908",
      boxShadow: "0  0 0px 2.5px #ff9908",
      border: "none",
    },
    "@media (max-width: 540px)": {
      width: "90%",
    },
  },
  btnSubmit: {
    fontWeight: 600,
    backgroundColor: "#ff9908",
    color: "#fff",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    "&:hover": {
      backgroundColor: "#dc3545",
    },
  },
}));
const initialState = { muscleGroup: "", name: "", video: "", text: "" };

const EditExercise = ({ editExercise, getExercise, exercise, loading }) => {
  const classes = useStyles();
  const { id } = useParams();

  const [form, setForm] = useState(initialState);
  const { muscleGroup, name, video, text } = form;

  useEffect(() => {
    if (!exercise) getExercise(id);
    if (!loading && exercise) {
      const exerciseData = { ...initialState };
      for (const key in exercise) {
        if (key in exerciseData) exerciseData[key] = exercise[key];
      }
      setForm(exerciseData);
    }
  }, [getExercise, id, loading, exercise]);
  const changeFormHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = () => {
    editExercise(id, form);
    setForm(initialState);
  };

  const muscleGroupList = [
    { name: "грудь", value: "chest" },
    { name: "плечи", value: "shoulders" },
    { name: "спина", value: "back" },
    { name: "руки", value: "arms" },
    { name: "ноги", value: "legs" },
    { name: "грудь", value: "press" },
  ];
  return (
    <Container className={classes.container}>
      <Box component="div">
        <Alert />
      </Box>
      <Grid className={classes.exerciseBlock}>
        {loading || exercise === null ? (
          <Box component="div" className={classes.loading}>
            <CircularProgress />
          </Box>
        ) : (
          <Fragment>
            <Box component="div" className={classes.muscleGroupContainer}>
              <TextField
                select
                label="Группа мышц"
                name="muscleGroup"
                value={muscleGroup}
                onChange={(event) => changeFormHandler(event)}
                helperText="Выберите группу мышц"
              >
                {muscleGroupList.map((muscleGroupItem, index) => (
                  <MenuItem key={index} value={muscleGroupItem.value}>
                    {muscleGroupItem.name}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <TextField
              className={classes.input}
              label="Название программы тренировок"
              variant="outlined"
              name="name"
              value={name}
              onChange={(event) => changeFormHandler(event)}
            />
            <TextField
              className={classes.input}
              label="Ссылка на заглавную картинку"
              variant="outlined"
              name="video"
              value={video}
              onChange={(event) => changeFormHandler(event)}
            />
            <TextareaAutosize
              className={classes.textArea}
              placeholder=" Описание программы"
              rows={15}
              name="text"
              value={text}
              onChange={(event) => changeFormHandler(event)}
            />
            <Button className={classes.btnSubmit} onClick={() => submitForm()}>
              Изменить
            </Button>
          </Fragment>
        )}
      </Grid>
    </Container>
  );
};
EditExercise.propTypes = {
  editExercise: PropTypes.func.isRequired,
  getExercise: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  exercise: state.exercises.exercises.listItem,
  loading: state.exercises.exercises.loading,
});

export default connect(mapStateToProps, { editExercise, getExercise })(
  EditExercise
);
