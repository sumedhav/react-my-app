import React from 'react';
import './App.css';
import logo from './logo.svg';
import Students from './components/Students/Students'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from './reducers/rootReducer'
import StudentDetails from "./components/StudentDetails/StudentDetails";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const Img = () => {
    return  (<div><img src={logo} className="App-logo" alt="logo" /></div>)
}

function App() {
    return (
        <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Router>
            <Route exact path="/" component={Img} />
            <Route exact path="/students/" component={Students} />
            <Route path="/students/:rollNumber" component={StudentDetails} />
            <Route path="/studentsDetails" component={StudentDetails} />
        </Router>
        </Provider>
    );
}

export default App;
