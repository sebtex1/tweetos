import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from '../screens/login'
import Home from '../screens/home'
import Search from '../screens/search'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <PrivateRoute exact path="/home">
                    <Home />
                </PrivateRoute>
                <PrivateRoute exact path="/search">
                    <Search />
                </PrivateRoute>
                <Redirect to="/"></Redirect>
            </Switch>
        </Router>
)
}

function PrivateRoute({ children, ...rest }) {
    let isToken = localStorage.getItem('token')
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isToken ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
  }

export default Routes