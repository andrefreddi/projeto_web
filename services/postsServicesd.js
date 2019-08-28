
var getPosts = function(){
    var posts = [
        {
            id: 1,
            title: 'Bootstrap',
            image: 'bootstrap.png',
            description: 'Tudo sobre Bootstrap para você!',
            body: 'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo. O Bootstrap é um dos projetos mais bem avaliado no site GitHub, com mais de 111 600 estrelas e 51 500 forks.[1] Possui ampla documentaçao na pagina oficial: https://getbootstrap.com/, assim como diversos tutoriais e materiais em português.'
        },

        {
            id: 2,
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo esta voltado aos bot'
        },

        {
            id: 3,
            title: 'Sistema Altomatico de posts :3c',
            image: '1759.png',
            description: 'Novo sistema do blog',
            body: 'Este eh meu segundo post, assim sai meu flint ou o devigle'
        },


    ];


    return posts;    
}

module.exports = {
    getPosts: getPosts
}