import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CentralizedContainer from "../../components/centralizedContainer/CentralizedContainer";

const UserDetailPage = () => {
    const { id } = useParams();
    const user = useSelector((state) =>
        state.users.data.find((user) => user.id.toString() === id)
    );

    if (!user) {
        return <CentralizedContainer>User not found!</CentralizedContainer>;
    }

    return (
        <CentralizedContainer>
            <h1>{user.name}</h1>
            <p><strong>Email</strong>: {user.email}</p>
            <p><strong>Phone</strong>: {user.phone}</p>
            <p><strong>Company</strong>: {user.company.name}</p>
            <p><strong>Address</strong>: {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</p>
        </CentralizedContainer>
    );
};

export default UserDetailPage;
