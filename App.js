import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import history from './components/history'
import Authors from "./pages/Authors";
import Employees from "./pages/Employees";
import ItemNumbers from "./pages/ItemNumbers";
import Lendings from "./pages/Lendings";
import Libraries from "./pages/Libraries";
import LocationPublications from "./pages/LocationPublications";
import Pensioners from "./pages/Pensioners";
import Users from "./pages/Users";
import UserCategories from "./pages/UserCategories";
import PublicationTypes from "./pages/PublicationTypes";
import PublicationCategories from "./pages/PublicationCategories";
import Publications from "./pages/Publications";
import QueryP from "./pages/QueryP";

function App() {
  return (
    <div className="App">
      <Router history={history}>
          <Routes>
              <Route exact path="/authors" element={<Authors/>}/>
              <Route exact path="/employees" element={<Employees/>}/>
              <Route exact path="/itemNumbers" element={<ItemNumbers/>}/>
              <Route exact path="/lending" element={<Lendings/>}/>
              <Route exact path="/libraries" element={<Libraries/>}/>
              <Route exact path="/locationPublications" element={<LocationPublications/>}/>
              <Route exact path="/pensioners" element={<Pensioners/>}/>
              <Route exact path="/users" element={<Users/>}/>
              <Route exact path="/usersCategories" element={<UserCategories/>}/>
              <Route exact path="/publicationTypes" element={<PublicationTypes/>}/>
              <Route exact path="/publicationCategories" element={<PublicationCategories/>}/>
              <Route exact path="/publications" element={<Publications/>}/>
              <Route exact path="/employees/q" element={<QueryP/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
