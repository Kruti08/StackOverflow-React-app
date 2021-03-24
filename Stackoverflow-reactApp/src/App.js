import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './StackOverflowClone/LoginForm/LoginForm';
import Header from './StackOverflowClone/Header/Header';
import Login from './StackOverflowClone/Login';
import Feature from './StackOverflowClone/Features/Feature';
import { Route, Link, BrowserRouter as Router, Switch, Redirect, useHistory, useLocation } from "react-router-dom";
import { useAuth } from './StackOverflowClone/auth-context';
import UserProfile from './StackOverflowClone/UserProfile/UserProfile';
import Hello from './components/Hello'
function App() {

    return (
        <div>
            <div className="App">
                <Header /><br></br>
                <Router>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={LoginForm}
                        />
                        
                        <PrivateRoute exact path="/user/:id">
                            <UserProfile />
                        </PrivateRoute>

                        <PrivateRoute exact path="/feature">
                            <Feature />
                        </PrivateRoute>

                    </Switch>
                </Router>

            </div>
        </div>
    );

    function PrivateRoute({ children, ...rest }) {
        const auth = useAuth();
        console.log("check", auth);
        return (
            <Route
                {...rest}
                render={() =>
                    auth.user ? (
                        children
                    ) : (
                            <Redirect
                                to="/"
                            />
                        )
                }
            />
        );
    }


}
export default App;