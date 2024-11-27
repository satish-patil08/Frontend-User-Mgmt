import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from "./components/header/Header";
import UserListPage from "./pages/userListPage/UserListPage";
import UserDetailPage from "./pages/userDetailPage/UserDetailPage";


const App = () => (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<UserListPage />} />
          <Route path="/users/:id" element={<UserDetailPage />} />
        </Routes>
      </Router>
    </Provider>
);

export default App;
