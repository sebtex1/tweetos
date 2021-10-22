import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from '../screens/login'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes