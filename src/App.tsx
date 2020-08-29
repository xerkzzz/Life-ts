import React from 'react';
import './App.css';
import TransformNumbers from "./services/TransformNumbers";
import {getRandomMatrix} from "./util/random";
import {N_COLUMNS, N_ROWS} from "./config/config";
import {Life} from "./components/Life";


export const App = () => {
  const transform = new TransformNumbers(getRandomMatrix(N_COLUMNS, N_ROWS, 0, 1));
  return <React.Fragment>

    <Life transform = {transform}/>
    {/*<HashRouter>*/}
    {/*  <Redirect to={'/life'} />*/}
    {/*  <Switch>*/}
    {/*    <Route exact path={'/life'} component={Life} />*/}

    {/*  </Switch>*/}
    {/*</HashRouter>*/}
  </React.Fragment>
}
