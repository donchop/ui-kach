import React, { useEffect } from "react";
import {
  Container,
  Box,
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import AddIcon from "@material-ui/icons/Add";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import ProgramItem from "../components/ProgramItem";
import { getPrograms } from "../actions/program";

const useStyle = makeStyles({
  container: {
    marginTop: "3%",
    width:"50%",
    "@media (max-width: 1200px)": {
      width:"100%",
    },
  },
  btnAdd: {
    border: "2px solid #ff9908",
    height: "100px",
    color: "#ff9908",
    "&:hover": {
      border: "2px solid #dc3545",
      color: "#dc3545", 
    },
  },
  loading: {
    margin: "50%",
  },
});

const Programs = ({
  isAuthenticated,
  getPrograms,
  programs: { programs, loading },
}) => {
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
    getPrograms();
  }, [getPrograms]);

  return (
    <Container className={classes.container}>
      <Box component="div">
        {isAuthenticated ? (
          <Button
            variant="outlined"
            fullWidth
            className={classes.btnAdd}
            onClick={() => history.push("/programs/addProgram")}
          >
            <AddIcon className={classes.iconAdd} />
            <Typography>Добавить Программу</Typography>
          </Button>
        ) : null}
        {loading ? (
          <Box component="div" className={classes.loading}>
            <CircularProgress />
          </Box>
        ) : (
          programs.map((program) => (
            <ProgramItem program={program} key={program._id} />
          ))
        )}
      </Box>
    </Container>
  );
};

Programs.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  getPrograms: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.auth.isAuthenticated,
  programs: state.programs.programs,
});

export default connect(mapStateToProps, { getPrograms })(Programs);
