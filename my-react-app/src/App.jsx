import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from './const/const';
import { getData } from './get_data/get_data';
import { updateUsers } from './store/slice/data';
import { UserList } from './user_list/user_list';
import { Normalize } from 'styled-normalize';

import './App.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            const users = await getData(API.USERS);
            dispatch(updateUsers(users));
        }
        fetchData();
    }, []);

    return (
        <>
            <Normalize />
            <UserList />
        </>
    );
}

export default App;
