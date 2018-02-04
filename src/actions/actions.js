import {OPEN_OPTIONS,CLOSE_OPTIONS}from '../action-type/action-type';

export function openOptions() {
    return{
        type:OPEN_OPTIONS,
    }
}

export function closeOptions() {
    return{
        type:CLOSE_OPTIONS,
    }
}