import React, {useState} from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import UsersPage from "./pages/UsersPage";
import LoginPage from "./pages/LoginPage";
import SecretPage from "./pages/SecretPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true)
  };

  return (
    <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route exact path="/users/" component={UsersPage}/>
      <Route path="/users/:id" component={UserPage}/>
      <Route path="/login"
             render={() => (
               <LoginPage
                 isLoggedIn={isLoggedIn}
                 onLogin={onLogin}
               />
             )}/>
      <Route path="/secret"
             render={() => (
               <SecretPage
                 isLoggedIn={isLoggedIn}
               />
             )}/>
      <Route component={NotFoundPage}/>
      {/*<Redirect to="/" />*/}
    </Switch>
  )
};