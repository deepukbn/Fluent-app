import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
import AccountDetailsCard from './Components/AccountDetailsCard';
import Appbar from './Components/Appbar';



export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/Appbar' exact component={Appbar}/>
                <Route path='/AccountDetailsCard' exact component={AccountDetailsCard}/>

            </Switch>
        </Router>
    )
}