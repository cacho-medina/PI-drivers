import { useDispatch } from "react-redux";
import { obtenerPilotosByName } from "../../redux/actions/action";
import styles from "./Searchbar.module.css";
import { useState } from "react";
function Searchbar() {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    function handleChange(event) {
        setName(event.target.value);
        dispatch(obtenerPilotosByName(event.target.value));
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                value={name}
                placeholder="Busca un conductor..."
                className={styles.input}
                onChange={handleChange}
            />
        </div>
    );
}

export default Searchbar;
