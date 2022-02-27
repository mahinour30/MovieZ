import { ADD, DEL } from './types'

export const add = (payload) => {
    return {
        type: ADD,
        data: payload,
    }
}

export const del = (id) => {
    return {
        type: DEL,
        id: id,
    }
}

