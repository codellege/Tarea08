let inputTxt = document.getElementById('inputTxt');
let outLabel = document.getElementById('alert');

let price = 0;

inputTxt.addEventListener('keyup', (e) => {
    let s = Number(e.target.value);

    if (isNaN(s)) {
        e.target.value = '';
    } else {
        if (s <= 30) {
            price = 4000;

            outLabel.innerHTML = `<div class="alert bg-dark rounded p-2">
                                        <strong class="text-white">Costo de Autobus: $${price}<br>
                                        Costo de Viaje: $${price*s}</strong>
                                  </div> `
        } else {
            if (s >= 100) {
                price = 65;
            } else if (s >= 50) {
                price = 70;
            } else if (s >= 30) {
                price = 95;
            }
            outLabel.innerHTML = `<div class="alert bg-dark rounded p-2">
                                        <strong class="text-white">Costo por Alumno: $${price}<br>
                                        Costo de Viaje: $${price*s}</strong>
                                  </div> `
        }

    }

})