import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BarGraph from './components/BarGraph';
import LineGraph from './components/LineGraph';
import ArcGraph from './components/ArcGraph';
import './styles/scss/App.scss';

class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <div className='switches-header'>
                        <Link className='graph-link' to='/barGraph'>Bar Graph</Link>
                        <Link className='graph-link' to='/lineGraph'>Line Graph</Link>
                        <Link className='graph-link' to='/arcGraph'>Arc Graph</Link>
                    </div>
                    <Route exact={true} path="/barGraph" component={BarGraph} />
                    <Route exact={true} path="/lineGraph" component={LineGraph} />
                    <Route exact={true} path="/arcGraph" component={ArcGraph} />
                </div>
            </Router>
        );
    }
}

export default App;
