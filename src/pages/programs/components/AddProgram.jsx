import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProgram } from "../actions/program";
import {
  TextField,
  makeStyles,
  Container,
  Grid,
  TextareaAutosize,
  Button,
  Box,
} from "@material-ui/core";
import Alert from "../../../components/alert";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "5%",
  },
  programBlock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

const AddProgram = ({ addProgram }) => {
  const classes = useStyles();
  const initialState = { title: "", imgUrl: "", text: "" };
  const [form, setForm] = useState(initialState);
  const { title, imgUrl, text } = form;
  const changeFormHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = () => {
    addProgram(form);
    setForm(initialState);
  };

  return (
    <Container className={classes.container}>
      <Grid className={classes.programBlock}>
        <Box component="div">
          <Alert />
        </Box>
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Название программы тренировок"
          variant="outlined"
          name="title"
          value={title}
          onChange={(event) => changeFormHandler(event)}
        />
        <TextField
          className={classes.input}
          id="outlined-basic"
          label="Ссылка на заглавную картинку"
          variant="outlined"
          name="imgUrl"
          value={imgUrl}
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
          Отправить
        </Button>
      </Grid>
    </Container>
  );
};
AddProgram.propTypes = {
  addProgram: PropTypes.func.isRequired,
};

export default connect(null, { addProgram })(AddProgram);
