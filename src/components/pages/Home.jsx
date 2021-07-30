import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// molecules
import HomeContainer from '../molecules/HomeContainer';

//organisms
import Header from './../organisms/Header';
import SignUp from './../organisms/SignUp';
import SignIn from './../organisms/SignIn';

// templates
import ContainerWrapper from '../layouts/ContainerWrapper';
import DivWrapper from '../layouts/DivWrapper';

const Home = () => {
  return (
    <Router>
      <div>
        <Header />
        <ContainerWrapper>
          <Switch>
            <Route exact path="/">
              <HomeContainer />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
          </Switch>
        </ContainerWrapper>
      </div>
    </Router>
  );
};

export default Home;
