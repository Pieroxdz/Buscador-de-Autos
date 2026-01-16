const selectMarca = document.querySelector("#marca");
const selectYear = document.querySelector("#year");
const selectMinimo = document.querySelector("#minimo");
const selectMaximo = document.querySelector("#maximo");
const selectPuertas = document.querySelector("#puertas");
const selectTransmision = document.querySelector("#transmision");
const selectColor = document.querySelector("#color");
const resultado = document.querySelector("#resultado");

const datosBusqueda = {
    marca: "",
    year: "",
    minimo: "",
    maximo: "",
    puertas: "",
    transmision: "",
    color: "",
}

const limpiarHTML = (referencia) => {
    while (referencia.firstChild) {
        referencia.removeChild(referencia.firstChild)
    }
}

const filtrarColor = (auto) => {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }

    return auto;
}

const filtrarTransmision = (auto) => {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

const filtrarPuertas = (auto) => {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }

    return auto;
}

const filtraMaximo = (auto) => {
    const { maximo } = datosBusqueda;
    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

const filtrarMinimo = (auto) => {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

const filtrarYear = (auto) => {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    }
    return auto;
}

const filtrarMarca = (auto) => {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca
    }
    return auto;
}

const filtrarAuto = () => {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtraMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    mostrarAutos(resultado);
}

const mostrarAutos = (autos) => {
    limpiarHTML(resultado)

    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmisión ${transmision} - Precio: $${precio}- Color: ${color}`
        resultado.appendChild(autoHTML)
    })

}

const poblarSelectYear = () => {
    let max = new Date().getFullYear();
    let min = max - 10;

    for (let i = max; i > min; i--) {
        const option = document.createElement("OPTION")
        option.value = i
        option.textContent = i;
        selectYear.appendChild(option)
    }
}

selectMarca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})

selectYear.addEventListener("change", (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto()
})

selectMinimo.addEventListener("change", (e) => {
    datosBusqueda.minimo = parseInt(e.target.value)
    filtrarAuto()
})

selectMaximo.addEventListener("change", (e) => {
    datosBusqueda.maximo = parseInt(e.target.value)
    filtrarAuto()
})

selectPuertas.addEventListener("change", (e) => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})

selectTransmision.addEventListener("change", (e) => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})

selectColor.addEventListener("change", (e) => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
})

selectMarca.addEventListener("change", (e) => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos(autos)
    poblarSelectYear()
})