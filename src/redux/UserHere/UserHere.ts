import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { asd } from "../../components/Login";

export interface UserData {
    isHere: boolean
    userData: {
        name: String,
        username: String,
        mail: String
    }
}
  
const initialState: UserData = {
    isHere: false,
    userData: {
        name: '',
        username: '',
        mail: ''
    }
}

export const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        login: (state: UserData, action: PayloadAction<asd>) => {
            let NewUser : UserData = {
                isHere: true,
                userData : {
                    name: action.payload.usernamee,
                    mail: action.payload.maill
                }
            }
            state = NewUser;
            console.log("added data!!")
        },
        logout: (state, action: PayloadAction<number>) => {
          
        }
    },
})

export const { login, logout } = UserSlice.actions

export default UserSlice.reducer