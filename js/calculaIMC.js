let pacientes = document.querySelectorAll('.paciente')

pacientes.forEach(paciente => {
    let tdPeso = paciente.querySelector('.info-peso')
    let tdAltura = paciente.querySelector('.info-altura')
    let tdImc = paciente.querySelector('.info-imc')

    let peso = tdPeso.textContent
    let altura = tdAltura.textContent

    let pesoIsValid = validaPeso(peso)
    let alturaIsValid = validaAltura(altura)

    if(pesoIsValid && alturaIsValid){
        tdImc.textContent = calculaImc(peso, altura)
    } else{
        tdImc.textContent = 'Altura ou Peso inválido'
        paciente.classList.add('paciente-invalido')
    }
})

function calculaImc(peso, altura){
    let imc = 0
    imc = peso / (altura * altura)

    return imc.toFixed(2)
}

function validaPeso(peso){
    return peso > 0 && peso < 200 
}

function validaAltura(altura){
    return altura > 0 && altura < 3
}






