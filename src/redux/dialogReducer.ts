import { InferActionsTypes } from './redux-store';
import { DialogItemDataType, DialogMessageDataType } from './../types/types';

type ActionsType = InferActionsTypes<typeof DialogActions>

export const DialogActions = {
    addMessageActionCreator: (messageBody: string) => ({ type: 'ADD_MESSAGE', messageBody } as const)
}


export type dialogStateType = typeof initialState;

let initialState = {
    DialogItemData: [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" },
        { id: 4, name: "User 4" },
        { id: 5, name: "User 5" },
        { id: 6, name: "User 6" }
    ] as Array<DialogItemDataType>,
    DialogMessageData: [
        { id: 1, text: "First message" },
        { id: 2, text: "This part of social network is just simulation" },
        { id: 3, text: "This is static message" }
    ] as Array<DialogMessageDataType>
}

let dialogReducer = (state = initialState, action: ActionsType): dialogStateType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                DialogMessageData: [...state.DialogMessageData, {
                    id: state.DialogMessageData.length + 1,
                    text: action.messageBody }],
            }
        default:
            return state;
    }
}

export default dialogReducer;