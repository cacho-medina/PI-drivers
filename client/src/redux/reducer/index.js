import {
    ORDER,
    FILTER,
    OBTENER_PILOTOS,
    SHOW,
    PAGE,
} from "../actions/action-types";

const initialState = {
    drivers: [],
    driversBD: [],
    teams: [],
    show: false,
    pagina: 1,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER:
            return;
        case FILTER:
            return;
        case PAGE:
            return { ...state, pagina: action.payload };
        case SHOW:
            return { ...state, show: action.payload };
        case OBTENER_PILOTOS:
            return { ...state, drivers: action.payload };
        default:
            return state;
    }
};

export default rootReducer;
