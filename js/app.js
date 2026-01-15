const resultado = document.querySelector("#resultado");
const selectYear = document.querySelector("#year");

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

const mostrarAutos = () => {
    autos.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement("P");
        autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmisión ${transmision} - Precio: $${precio}- Color: ${color}`
        resultado.appendChild(autoHTML)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarAutos()
    poblarSelectYear()
})