import axios from "axios";
import { OBTENER_PILOTOS, ORDER, FILTER, SHOW, PAGE } from "./action-types";

export function obtenerPilotos() {
    return async function (dispatch) {
        const res = await axios.get("http://localhost:3001/drivers");
        const data = await res.data;
        return dispatch({
            type: OBTENER_PILOTOS,
            payload: data,
        });
    };
}
export function showPilotos() {
    return {
        type: SHOW,
        payload: true,
    };
}
export function order() {
    return {
        type: ORDER,
    };
}

export function filter() {
    return {
        type: FILTER,
    };
}
export function savePage(page) {
    return {
        type: PAGE,
        payload: page,
    };
}
