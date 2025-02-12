import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import Header from "./components/header/Header";
import Login from "./pages/userLogin/Login";
import {ToastProvider} from "./components/toast/Toast";

const App = () => (
    <Provider store={store}>
        <ToastProvider> {/* Wrap the entire app with ToastProvider */}
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                </Routes>
            </Router>
        </ToastProvider>
    </Provider>
);

export default App;
