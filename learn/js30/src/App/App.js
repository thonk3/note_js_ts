import React from 'react'

import {
  Route, Switch, BrowserRouter
} from 'react-router-dom'
import * as Routes from '../Routes/Routes';

const App = props => {


  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Routes.Home} />

          {/* 30 days things */}


          {/* misc */}
          <Route component={Routes.NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
