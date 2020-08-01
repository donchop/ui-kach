import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExercise } from "../../exercises/actions/exercises";
import {
  TextField,
  makeStyles,
  Container,
  Grid,
  TextareaAutosize,
  Button,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  ListSubheader,
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
  formControl: {
    width: "150px",
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

const AddExercise = ({ addExercise }) => {
  const classes = useStyles();
  const initialState = { muscleGroup: "", name: "", video: "", text: "" };
  const [form, setForm] = useState(initialState);
  const { name, video, text } = form;
  const changeFormHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = () => {
    addExercise(form);
    setForm(initialState);
  };

  // const muscleGroupList2 = [
  //   { name: "грудь", value: "chest" },
  //   { name: "плечи", value: "shoulders" },
  //   { name: "спина", value: "back" },
  //   { name: "руки", value: "arms" },
  //   { name: "ноги", value: "legs" },
  //   { name: "грудь", value: "press" },
  // ];
  // const muscleGroupList = [
  //   { name: "грудь", value: "chest" },
  //   { name: "Шея", value: "shoulders" },
  //   { name: "Трапеция", value: "trapezius" },
  //   { name: "Широчайшие", value: "latissimus" },
  //   { name: "Поясница", value: "lowerback" },
  //   { name: "Передняя дельта", value: "frontdelt" },
  //   { name: "Средняя дельта", value: "middledelt" },
  //   { name: "Задняя дельта", value: "reardelt" },
  //   { name: "Бицепс", value: "biceps" },
  //   { name: "Трицепс", value: "triceps" },
  //   { name: "Предплечье", value: "forearm" },
  //   { name: "Ягодицы", value: "buttocks" },
  //   { name: "Четырехглавая", value: "quadriceps" },
  //   { name: "Двуглавая", value: "bicepsfemoris" },
  //   { name: "Икроножные", value: "calf" },
  //   { name: "Пресс", value: "press" },
  // ];

  return (
    <Container className={classes.container}>
      <Grid className={classes.exerciseBlock}>
        <Box component="div">
          <Alert />
        </Box>
        <Box component="div" className={classes.muscleGroupContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-select">Группа мышц</InputLabel>
            <Select
              defaultValue=""
              id="grouped-select"
              name="muscleGroup"
              onChange={(event) => changeFormHandler(event)}
            >
              <MenuItem value="chest">Грудь</MenuItem>
              <ListSubheader>Спина</ListSubheader>
              <MenuItem value="shoulders">Шея</MenuItem>
              <MenuItem value="trapezius">Трапеция</MenuItem>
              <MenuItem value="latissimus">Широчайшие</MenuItem>
              <MenuItem value="lowerback">Поясница</MenuItem>
              <ListSubheader>Плечи</ListSubheader>
              <MenuItem value="frontdelt">Передняя дельта</MenuItem>
              <MenuItem value="middledelt">Средняя дельта</MenuItem>
              <MenuItem value="reardelt">Задняя дельта</MenuItem>
              <ListSubheader>Руки</ListSubheader>
              <MenuItem value="biceps">Бицепс</MenuItem>
              <MenuItem value="triceps">Трицепс</MenuItem>
              <MenuItem value="forearm">Предплечье</MenuItem>
              <ListSubheader>Ноги</ListSubheader>
              <MenuItem value="buttocks">Ягодицы</MenuItem>
              <MenuItem value="quadriceps">Четырехглавыя</MenuItem>
              <MenuItem value="bicepsfemoris">Двуглавая</MenuItem>
              <MenuItem value="calf">Икроножные</MenuItem>
              <ListSubheader></ListSubheader>
              <MenuItem value="press">Пресс</MenuItem>
            </Select>
          </FormControl>
     

          {/* <TextField
            select
            label="Группа мышц"
            name="muscleGroup"
            value={muscleGroup}
            onChange={(event) => changeFormHandler(event)}
            helperText="Выберите группу мышц"
          >
            {muscleGroupList2.map((muscleGroupItem, index) => (
              <MenuItem key={index} value={muscleGroupItem.value}>
                {muscleGroupItem.name}
              </MenuItem>
            ))}
          </TextField> */}

           
        </Box>
        <TextField
          className={classes.input}
          label="Название упражнения"
          variant="outlined"
          name="name"
          value={name}
          onChange={(event) => changeFormHandler(event)}
        />
        <TextField
          className={classes.input}
          label="Ссылка на видео выполнения упражнения"
          variant="outlined"
          name="video"
          value={video}
          onChange={(event) => changeFormHandler(event)}
        />
        <TextareaAutosize
          className={classes.textArea}
          placeholder=" Описание выполнения упражнения"
          rows={15}
          name="text"
          value={text}
          onChange={(event) => changeFormHandler(event)}
        />
        <Button className={classes.btnSubmit} onClick={() => submitForm()}>
          Отправить
        </Button>
      </Grid>
    </Container>
  );
};
AddExercise.propTypes = {
  addExercise: PropTypes.func.isRequired,
};

export default connect(null, { addExercise })(AddExercise);
