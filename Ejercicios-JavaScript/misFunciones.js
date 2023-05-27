/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function conversorUnidades(id, valor){
    if (isNaN(valor)){
        document.unidades.unid_metro.value = " ";
        document.unidades.unid_yarda.value = " ";
        document.unidades.unid_pulgada.value = " ";
        document.unidades.unid_pie.value = " ";
        alert("El dato ingresado es invalido")
    }
    else if (id == "metro"){
        document.unidades.unid_yarda.value = 1.09361 * valor;
        document.unidades.unid_pulgada.value = 39.3701 * valor;
        document.unidades.unid_pie.value = 3.28084 * valor;
    }
    else if (id == "pie"){
        document.unidades.unid_metro.value = 0.3048 * valor;
        document.unidades.unid_yarda.value = 0.333333 * valor;
        document.unidades.unid_pulgada.value = 12 * valor;
    }
    else if (id == "yarda"){
        document.unidades.unid_metro.value = 0.9144 * valor;
        document.unidades.unid_pie.value = 3 * valor;
        document.unidades.unid_pulgada.value = 36 * valor;
    }
    else if (id == "pulgada"){
        document.unidades.unid_metro.value = 0.0254 * valor;
        document.unidades.unid_yarda.value = 0.0277778 * valor;
        document.unidades.unid_pie.value = 0.0833333 * valor;
    }
}