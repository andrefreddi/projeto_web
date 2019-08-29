
var getProjects = function(){
var projects = [
        {
            id: 5,
            title: 'Jogo da velha em C#',
            image: 'jogodavelha.png',
            description: 'Jogo da velha feito em C#',
            body: 'Um trabalho de faculdade feito em C#, um jogo da velha'
        },

        {
            id: 6,
            title: 'Site estatico em HTML',
            image: 'thepiratecatolica.jpg',
            description: 'Site criado ultilizando o TML -The pirate Catolica-',
            body: 'Site criado ultilizando o HTML, Css e Boostrap, dado o seu nome de -The pirate Catolica- teve seu intuito de ser um site para fornecer dowloads de jogos piratas'
        },

    ];


    return projects;    
}

module.exports = {
    getProjects: getProjects
}