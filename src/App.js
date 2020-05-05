import React from 'react';
// import PrivateRoute from './PrivateRoute';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import Auth from './modules/auth/pages/Auth';
import Score from './modules/game/score/components/Score';
import PanelCustomization from './modules/customization/pages/PanelCustomization';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Provider store={store} >
            <Switch>
              <Route exact path='/' component={Auth} />
              <Route exact path='/home' component={Score} />
              <Route exact path='/customization' component={PanelCustomization} />
              {/* <PrivateRoute exact path='/cart' component={Auth} />
              <PrivateRoute exact path='/customization' component={ColorPicker} /> */}
              {/* <Route component={NotFound} /> */}
            </Switch>
        </Provider>
      </Router>
    </div>
  );
}
export default App;