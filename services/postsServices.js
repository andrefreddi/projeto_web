
var getPosts = function(){
    var posts = [
        {
            id: 1,
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro post eh oq vou mixar'
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

        {
            id: 4,
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