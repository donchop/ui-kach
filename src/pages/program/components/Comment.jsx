import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Moment from "react-moment";

import { removeComment } from "../../programs/actions/program";

const useStyles = makeStyles({
  root: {
    marginBottom:"5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  commentHeader: {
    fontSize: 16,
    fontWeight: 500,
    color: "#ff9908",
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 16,
    fontWeight: 500,
    color: "#ff9908",
    display: "flex",
    justifyContent: "space-between",
  },
  pos: {
    marginBottom: 12,
  },
  btnDelete: {
    backgroundColor: "rgb(255,0,0,.1)",
    fontWeight: 600,
    color: "red",
  },
});

const Comment = ({
  comment: { _id, name, user, date, text },
  post_id,
  removeComment,
  auth,
}) => {
  const classes = useStyles();
  const removeCommentHandler = () => {
    const answer = window.confirm("Удалить комментарий?");
    if (answer) {
      removeComment(post_id, _id);
    }
  };
  console.log('test2');
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid component="div" className={classes.commentHeader}>
          <Grid item>
            <Typography variant="body2" className={classes.userName}>
              {name}
              {"  "}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="span">
              <Moment format="DD-MM-YYYY">{date}</Moment>
            </Typography>
          </Grid>
          <Grid>
            {!auth.loading && auth.user !== null && user === auth.user._id && (
              <Button
                className={classes.btnDelete}
                onClick={() => removeCommentHandler()}
              >
                X
              </Button>
            )}
          </Grid>
        </Grid>
        <Typography className={classes.pos}>{text}</Typography>
      </CardContent>
    </Card>
  );
};
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  removeComment: PropTypes.func.isRequired,
  post_id: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
});

export default connect(mapStateToProps, { removeComment })(Comment);
