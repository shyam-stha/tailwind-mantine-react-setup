import { createSlice } from '@reduxjs/toolkit'

type role = 'admin' | 'user'

interface IAuthState {
    name: string
    email: string
    password: string
    confirm: string
    phone: number
    address: string
    role: role
}

const initialState: IAuthState = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    phone: 0,
    address: '',
    role: 'user',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {},
})

export const {} = authSlice.actions

export default authSlice.reducer
