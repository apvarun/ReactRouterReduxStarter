import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
// import Home from './containers/home';
// import Contact from './components/contact';
import './app.css';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
    loader: () => import('./containers/home'),
    loading: Loading,
});
  
const Contact = Loadable({
    loader: () => import('./components/contact'),
    loading: Loading,
});

// stateless function method

// const App = (props) => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route exact path='/' component={Home}/>
//                 <Route path='/contact' component={Contact}/>
//             </Switch>
//         </BrowserRouter>
//     );
// }
// export default App;

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </BrowserRouter>
        );
    }
}