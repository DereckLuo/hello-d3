import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BarGraph from './components/BarGraph';
import './App.css';

class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <div className='switches-header'>
                        <Link to='/barGraph'>Bar Graph</Link>
                    </div>
                    <Route exact={true} path="/barGraph" component={BarGraph} />
                </div>
            </Router>
        );
    }
}

export default App;
