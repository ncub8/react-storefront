import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { render } from "react-dom";
import Detail from "./detailPage";
import ItemContainer from "./components/ItemContainer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    paddingLeft: 20
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
            John Moore Shop
          </Typography>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <ItemContainer />
          </Route>
          <Route path="/detail" component={Detail} />
            
        </Switch>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
