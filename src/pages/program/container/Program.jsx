import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Moment from "react-moment";
import {
  makeStyles,
  Container,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Box,
  TextareaAutosize,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import Comment from "./Comment";
import Alert from "../../../components/alert";
import { getProgram, addComment } from "../../programs/actions/program";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "50%",
    "@media (max-width: 1200px)": {
      width: "100%",
    },
  },
  card: {
    marginBottom: "20px",
  },
  btn: {
    fontWeight: 600,
    backgroundColor: "#ff9908",
    color: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
    marginBottom: 10,
    "&:hover": {
      backgroundColor: "#dc3545",
    },
  },
  loading: {
    margin: "50%",
  },
  title: {
    fontSize: 40,
    fontWeight: 600,
  },
  date: {
    color: "#64677c",
  },
  description: {
    marginTop: 10,
  },
  textArea: {
    width: "100%",
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
      boxShadow: "0  0 0px 1px #ff9908",
      border: "none",
    },
  },
  imageProgram: {
    height: "100%",
    width: "100%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  btnAdd: {
    border: "1px solid #ff9908",
    color: "#ff9908",
  },
  commentContainer: {
    justifyContent: "flex-end",
  },
  commentsLength: {
    textTransform: "lowercase",
    fontSize: 12,
    color: "#ff9908",
    fontWeight: 600,
    border: "1px solid #ff9908",
  },
  containerBtnSubmit: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btnSubmit: {
    // fontWeight: 600,
    // color: "#fff",
    // backgroundColor: "rgba(255,153,8,.8)",
    // paddingLeft: 20,
    // paddingRight: 20,
    // paddingTop: 10,
    // paddingBottom: 10,
    // marginBottom: 10,
    // "&:hover": {
    //   backgroundColor: "#dc3545",
    // },
    fontWeight: 600,
    border: "2px solid #ff9908",
    color: "#ff9908",
    marginBottom: 10,
    "&:hover": {
      border: "2px solid #dc3545",
      color: "#dc3545",
    },
  },
  noComments: {
    marginTop: "3%",
    height: "200px",
  },
}));

const Program = ({
  programs: { program, loading },
  getProgram,
  addComment,
  removeComment,
  isAuthenticated,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [commentForm, toggleCommentForm] = useState(false);
  const [commentData, setCommentData] = useState({ text: "" });
  const { text } = commentData;

  useEffect(() => {
    getProgram(id);
  }, [getProgram, id]);

  const submitComment = () => {
    addComment(commentData, id);
    setCommentData({ text: "" });
    toggleCommentForm();
  };

  return (
    <Container className={classes.container}>
      {loading || program === null ? (
        <Box component="div" className={classes.loading}>
          <CircularProgress />
        </Box>
      ) : (
        <Fragment>
          <Card className={classes.card}>
            <CardActions className={classes.btnContainer}>
              <Button
                className={classes.btn}
                size="medium"
                color="primary"
                align="center"
                onClick={() => history.push("/programs")}
              >
                Назад
              </Button>
            </CardActions>
            <img className={classes.imageProgram} src={program.imgUrl} alt="" />
            <CardContent>
              <Typography
                className={classes.title}
                variant="h5"
                component="h1"
                align="center"
              >
                {program.title}
              </Typography>
              <Typography
                className={classes.date}
                variant="body1"
                component="h1"
                align="center"
              >
                <Moment format="DD-MM-YYYY">{program.date}</Moment>
              </Typography>

              <Typography
                className={classes.description}
                variant="body1"
                align="center"
                component="p"
              >
                {program.text}
              </Typography>
              <CardActions className={classes.commentContainer}>
                <Button
                  size="small"
                  className={classes.commentsLength}
                  component="a"
                  href="#comments"
                >
                  Комментарии: {program.comments.length}{" "}
                </Button>
              </CardActions>
            </CardContent>
          </Card>
          <Alert />
          {isAuthenticated ? (
            <Fragment>
              <Button
                variant="outlined"
                fullWidth
                className={classes.btnAdd}
                onClick={() => toggleCommentForm(!commentForm)}
              >
                <AddIcon className={classes.iconAdd} />
                <Typography>Оставить комментарий</Typography>
              </Button>
              {commentForm ? (
                <Fragment>
                  <TextareaAutosize
                    className={classes.textArea}
                    placeholder=" Оставьте комментарий..."
                    rows={8}
                    name="text"
                    value={text}
                    onChange={(e) =>
                      setCommentData({
                        ...commentData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <Box component="div" className={classes.containerBtnSubmit}>
                    <Button
                      className={classes.btnSubmit}
                      onClick={() => submitComment()}
                    >
                      Отправить
                    </Button>
                  </Box>
                </Fragment>
              ) : null}
            </Fragment>
          ) : null}
          <Box component="div" id="comments">
            {program.comments.length > 0 ? (
              program.comments.map((comment) => (
                <Comment
                  comment={comment}
                  removeComment={removeComment}
                  post_id={id}
                  key={comment._id}
                />
              ))
            ) : (
              <Typography className={classes.noComments}>
                Комметариев пока нет. Можете что-то написать...
              </Typography>
            )}
          </Box>
        </Fragment>
      )}
    </Container>
  );
};
Program.propTypes = {
  getProgram: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  programs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  programs: state.programs.programs,
  isAuthenticated: state.auth.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  getProgram,
  addComment,
})(Program);
