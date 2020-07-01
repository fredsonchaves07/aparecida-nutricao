let pacientes = document.querySelectorAll('.paciente')

pacientes.forEach(paciente => {
    let tdPeso = paciente.querySelector('.info-peso')
    let tdAltura = paciente.querySelector('.info-altura')
    let tdImc = paciente.querySelector('.info-imc')

    let peso = tdPeso.textContent
    let altura = tdAltura.textContent

    let pesoIsValid = peso > 0 && peso < 200
    let alturaIsValid = altura > 0 && altura < 3

    if(pesoIsValid && alturaIsValid){
        tdImc.textContent = calculaImc(peso, altura)
    } else{
        tdImc.textContent = 'Altura ou Peso inválido'
        paciente.classList.add('paciente-invalido')
    }
})

function calculaImc(peso, altura){
    let imc = peso / (altura * altura)

    return imc.toFixed(2)
}






