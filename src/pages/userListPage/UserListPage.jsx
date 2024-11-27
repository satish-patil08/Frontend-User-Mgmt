import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CentralizedContainer from "../../components/centralizedContainer/CentralizedContainer";
import SearchBar from "../../components/searchBar/SearchBar";
import UserCard from "../../components/userCard/UserCard";
import {fetchUsers} from "../../redux/userSlice";

const UserListPage = () => {
    const dispatch = useDispatch();
    const { data: users, status } = useSelector((state) => state.users);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [dispatch, status]);

    const filteredUsers = users.filter((user) =>
        `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <CentralizedContainer>
            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
            {filteredUsers.map((user) => (
                <UserCard key={user.id} user={user} onClick={(id) => navigate(`/users/${id}`)} />
            ))}
        </CentralizedContainer>
    );
};

export default UserListPage;
