import axios from "axios";
import {
    OBTENER_PILOTOS,
    ORDER,
    FILTER,
    ORIGEN,
    SHOW,
    PAGE,
    OBTENER_TEAMS,
    OBTENER_PILOTOS_BY_NAME,
} from "./action-types";

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
export function obtenerPilotosByName(nombre) {
    return async function (dispatch) {
        const res = await axios.get(
            `http://localhost:3001/drivers?name=${nombre}`
        );
        const data = await res.data;
        return dispatch({
            type: OBTENER_PILOTOS_BY_NAME,
            payload: { data, nombre },
        });
    };
}
export function obtenerTeams() {
    return async function (dispatch) {
        const res = await axios.get("http://localhost:3001/teams");
        const data = await res.data;
        return dispatch({
            type: OBTENER_TEAMS,
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
export function order(orden) {
    return {
        type: ORDER,
        payload: orden,
    };
}
export function filterOrigen(origen) {
    return {
        type: ORIGEN,
        payload: origen,
    };
}
export function filter(escuderia) {
    return {
        type: FILTER,
        payload: escuderia,
    };
}
export function savePage(page) {
    return {
        type: PAGE,
        payload: page,
    };
}
