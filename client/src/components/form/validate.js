const validarFecha = (dob) => {
    const fecha = new Date(dob);
    const hoy = new Date();
    return !isNaN(fecha) && fecha.toString() !== "Invalid Date" && fecha < hoy;
};
function validate(formData) {
    const err = {};
    if (formData.name.length < 3 || formData.name.length > 20) {
        err.name = "Instroduzca un nombre valido";
    }
    if (formData.lastname.length < 3 || formData.lastname.length > 20) {
        err.lastname = "Instroduzca apellido valido";
    }
    if (formData.nationality.length < 3 || formData.nationality.length > 20) {
        err.nationality = "Instroduzca un pais correcto";
    }
    if (!validarFecha(formData.dob)) {
        err.dob = "Fecha incorrecta";
    }
    //Seleccionar Escuderia desde la BD
    if (!formData.team) {
        err.team = "Ingrese una escuderia";
    }
    if (formData.desc.length < 3 || formData.desc.length > 150) {
        err.desc = "Ingrese una descripcion";
    }
    return err;
}
export default validate;
