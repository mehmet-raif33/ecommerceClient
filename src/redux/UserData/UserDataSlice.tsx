import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
    logStatement: boolean,
    UserDataUrl: string
}

const initialData : UserInfo = {
    logStatement: true,
    UserDataUrl: ''
}

const UserInfo = createSlice({
    name: 'UserInfo',
    initialState: initialData,
    reducers: {
        login: (state) => {

        },
        logout: (state) => {

        }
    }
})

export default UserInfo.reducer
export const { login, logout } = UserInfo.actions