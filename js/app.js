const resultado = document.querySelector("#resultado");

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
})