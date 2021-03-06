import { createSelector } from 'reselect';
import { stateType } from './redux-store';
import { usersType } from '../types/types';

// At this moment i dont need reselector, so i just tested how its work

const getUsers = (state: stateType) => {
    return state.usersPage.users
}

export const getUsersSelector = createSelector(getUsers, (users: Array<usersType>) => {
    return users.filter((a: usersType) => true)
})

export const getUserCount = (state: stateType) => {
    return state.usersPage.usersCount
}
export const getPageSize = (state: stateType) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: stateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: stateType) => {
    return state.usersPage.isFetching
}
export const getDisableUsers = (state: stateType) => {
    return state.usersPage.disableUsers
}
export const isAuth = (state: stateType) => {
    return state.auth.isAuth
}
export const getFilter = (state: stateType) => {
    return state.usersPage.filter
}