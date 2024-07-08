import { configureStore } from "@reduxjs/toolkit";
import UserInfo from "./UserData/UserDataSlice";

export const AppStore = configureStore({
    reducer: {
        UserInfo: UserInfo
    }
})

export type RootState = ReturnType<typeof AppStore.getState>
export type AppDispatch = typeof AppStore.dispatch