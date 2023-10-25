import {
    ORDER,
    FILTER,
    OBTENER_PILOTOS,
    OBTENER_PILOTOS_BY_NAME,
    SHOW,
    PAGE,
    OBTENER_TEAMS,
    ORIGEN,
} from "../actions/action-types";

const initialState = {
    drivers: [],
    driversCopy: [],
    driversBD: [],
    origin: "api",
    teams: [],
    show: false,
    pagina: 1,
    name: "",
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER:
            if (action.payload === "A-Z") {
                return {
                    ...state,
                    drivers: [...state.drivers].sort((a, b) =>
                        a.name.localeCompare(b.name)
                    ),
                };
            } else if (action.payload === "Z-A") {
                return {
                    ...state,
                    drivers: [...state.drivers].sort((a, b) =>
                        b.name.localeCompare(a.name)
                    ),
                };
            } else if (action.payload === "Jovenes") {
                return {
                    ...state,
                    drivers: [...state.drivers].sort(
                        (a, b) => new Date(b.birthday) - new Date(a.birthday)
                    ),
                };
            } else if (action.payload === "Veteranos") {
                return {
                    ...state,
                    drivers: [...state.drivers].sort(
                        (a, b) => new Date(a.birthday) - new Date(b.birthday)
                    ),
                };
            } else {
                return { ...state, drivers: state.driversCopy };
            }
        case FILTER:
            if (action.payload === "default") {
                return { ...state, drivers: state.driversCopy };
            } else {
                const filteredDrivers = state.driversCopy.filter(
                    (driver) => driver.team == action.payload
                );
                return {
                    ...state,
                    drivers: filteredDrivers,
                };
            }
        case PAGE:
            return { ...state, pagina: action.payload };
        case SHOW:
            return { ...state, show: action.payload };
        case ORIGEN:
            if (action.payload === "bd") {
                return { ...state, origin: action.payload };
            } else {
                return { ...state, origin: "api" };
            }
        case OBTENER_PILOTOS:
            return {
                ...state,
                drivers: action.payload,
                driversCopy: action.payload,
            };
        case OBTENER_PILOTOS_BY_NAME:
            return {
                ...state,
                drivers: action.payload.data,
                name: action.payload.nombre,
            };
        case OBTENER_TEAMS:
            return { ...state, teams: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
