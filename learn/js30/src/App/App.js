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
          <Route path='/d01' component={Routes.Day01} />
          <Route path='/d02' componene={Routes.Day02} />
          <Route path='/d03' component={Routes.Day03} />
          <Route path='/d04' component={Routes.Day04} />
          <Route path='/d05' component={Routes.Day05} />
          <Route path='/d06' component={Routes.Day06} />
          <Route path='/d07' component={Routes.Day07} />
          <Route path='/d08' component={Routes.Day08} />
          <Route path='/d09' component={Routes.Day09} />

          <Route path='/d10' component={Routes.Day10} />
          <Route path='/d11' component={Routes.Day11} />
          <Route path='/d12' component={Routes.Day12} />
          <Route path='/d13' component={Routes.Day13} />
          <Route path='/d14' component={Routes.Day14} />
          <Route path='/d15' component={Routes.Day15} />
          <Route path='/d16' component={Routes.Day16} />
          <Route path='/d17' component={Routes.Day17} />
          <Route path='/d18' component={Routes.Day18} />
          <Route path='/d19' component={Routes.Day19} />

          <Route path='/d20' component={Routes.Day20} />

          {/* misc */}
          <Route component={Routes.NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
