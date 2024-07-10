import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Login';
import RegistrationPage from './Components/Registration';
import HomePage from './Components/HomePage';
import ContactPage from './Components/Contact';
import UseRef from './Components/UseRef';
import UseContext from './Components/UseContext';
import UserMemo from './Components/UseMemo';
import ApiCalls from './Components/ApiCalls';
import FirstClassComponent from './Components/ClassComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
                <Routes>
                        <Route path='/' element={<App/>}></Route>
                        <Route path='/login' element={<LoginPage />}></Route>
                        <Route path='/registration' element={<RegistrationPage/>}></Route>
                        <Route path='/homepage' element={<HomePage/>}></Route>
                        <Route path='/contact' element={<ContactPage/>}></Route>
                        <Route path='/ref' element={<UseRef/>}></Route>
                        <Route path='/usecontext' element={<UseContext/>}></Route>
                        <Route path='/usememo' element={<UserMemo/>}></Route>
                        <Route path='/apicalls' element={<ApiCalls/>}></Route>
                        <Route path='/classcomponent' element={<FirstClassComponent/>}></Route>
                </Routes>
        </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();