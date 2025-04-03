//Script para o container de projetos e tecnologias

const projetos = [
    {
        nomeProjeto:'landingPagePsicologia',
        statusProjeto:'Em produção',
        descricao:'Página de divulgação de serviços de psicologia.',
        tecnologias:['HTML', 'CSS', 'BOOTSTRAP']
    },
    {
        nomeProjeto:'agendaVoluntarios',
        statusProjeto:'Em produção',
        descricao:'Aplicação web para o gerenciamento de escalas de voluntários para o serviço em igrejas.',
        tecnologias:['NODEJS', 'REACT', 'MYSQL']
    },
];

const coresTecnologias = {
    'HTML':'#2A50B2', 
    'CSS':'#B22A90',
    'BOOTSTRAP':'#E1E81D',
    'NODEJS':'#064700', 
    'REACT':'#4F0095', 
    'MYSQL':'#1DE8BF'
};

containerListaProjetos = document.getElementById('lista-projetos');

projetos.forEach(projeto =>{
    const elementoProjeto = document.createElement('div');
    elementoProjeto.classList.add('projeto');

    elementoProjeto.innerHTML = `
        <div class='projeto-header'>
            <h3>${projeto.nomeProjeto}</h3>
            <p><strong>${projeto.statusProjeto}<strong></p>
        </div>
        <p>${projeto.descricao}</p>
        <div class='tecnologias'>
            ${projeto.tecnologias.map(tec => `
                    <span class='tecnologia' style='background-color: ${coresTecnologias[tec] || '#ccc'}>
                    ● ${tec}
                    </span>`).join('')}
        </div>`;

    containerListaProjetos.appendChild(elementoProjeto);
});