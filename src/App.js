import './App.css';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/common/Navbar';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CirculatingSupply from './components/CirculatingSupply';
import TotalSupply from './components/TotalSupply';  
import { makeStyles, Button, Typography } from '@material-ui/core';
const styleAppjs = makeStyles((theme) => ({
  styleAppjs_Body: {
    overflow: 'hidden',
    padding: '0px', 
    width:"100%",
    height:'auto'
  }
  // className='d-flex no-wrap col-s-12 col-12 col-lg-12 col-md-12 pa-0'
}));
function App() {
  const cssClassAppjs = styleAppjs();
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Fragment>
            {/* <Route exact path="/">  className="appbar-section" */}
            <Route basename="/SoulWord">
              <section>
                <div className={cssClassAppjs.styleAppjs_Body}>
                <Navbar />
                <LandingPage />
                </div>
              </section>
              
            </Route>
            <Route exact path="/api/cirsupply">
              <CirculatingSupply />
            </Route>
            <Route exact path="/api/totalsupply">
              <TotalSupply />
            </Route>
          </Fragment>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
