let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()

    let form = document.querySelector('#form-adiciona')
    let paciente = obterInformacoesForm(form)
    let pacienteTr = montaTr(paciente)

    if(!validaPaciente(paciente)){
        alert('Valores inválidos de peso e altura')
        return
    }

    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)

    form.reset()
})

function obterInformacoesForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(peso, altura)
    }

    return paciente
}

function montaTr(paciente){
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    let nomeTd = document.createElement('td')
    nomeTd.classList.add('info-nome')
    let pesoTd = document.createElement('td')
    pesoTd.classList.add('info-peso')
    let alturaTd = document.createElement('td')
    alturaTd.classList.add('info-altura')
    let gorduraTd = document.createElement('td')
    gorduraTd.classList.add('info-gordura')
    let imcTd = document.createElement('td')
    imcTd.classList.add('info-imc')

    nomeTd.textContent = paciente.nome
    pesoTd.textContent = paciente.peso
    alturaTd.textContent = paciente.altura
    gorduraTd.textContent = paciente.gordura
    imcTd.textContent = calculaImc(paciente.peso, paciente.altura)

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

function validaPaciente(paciente){
    return validaPeso(paciente.peso) && validaAltura(paciente.altura)
}