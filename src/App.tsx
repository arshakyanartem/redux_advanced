import React, {useEffect} from 'react';
import {userSlice} from "./store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";

const App = () => {
    const {count, error, isLoading, users} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>Error</h2>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
};

export default App;