const validarFecha = (dob) => {
    const fecha = new Date(dob);
    const hoy = new Date();
    return !isNaN(fecha) && fecha.toString() !== "Invalid Date" && fecha < hoy;
};
const isValidUrl = (url) => {
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    return urlPattern.test(url);
};
function validate(formData) {
    const err = {};
    if (formData.name.length < 3 || formData.name.length > 20) {
        err.name = "Instroduzca un nombre valido";
    }
    if (formData.surname.length < 3 || formData.surname.length > 20) {
        err.surname = "Instroduzca apellido valido";
    }
    if (formData.nationality.length < 3 || formData.nationality.length > 20) {
        err.nationality = "Instroduzca un pais valido";
    }
    if (!validarFecha(formData.birthday)) {
        err.birthday = "Fecha incorrecta";
    }
    //Seleccionar Escuderia desde la BD
    if (!formData.teams) {
        err.teams = "Ingrese una escuderia";
    }
    if (formData.description.length < 3 || formData.description.length > 150) {
        err.description = "Ingrese una descripcion";
    }
    if (!isValidUrl(formData.img)) {
        err.img = "La URL de la imagen no es válida";
    }
    return err;
}
export default validate;
