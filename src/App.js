import React, { useState , useEffect } from "react";
import "./App.css";
import DataContainer from "./components/DataContainer";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DailyWeath from "./components/DailyWeath";
export default function App() {


   
    return (
        <>

            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/"><DataContainer /></Route>
                    <Route exact path="/daily"><DailyWeath /></Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}