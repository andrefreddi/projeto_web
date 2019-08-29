
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
            title: 'JavaScript',
            image: 'js.png',
            description: 'Tudo sobre JavaScript para você!',
            body: 'JavaScript, frequentemente abreviado como JS, é uma linguagem de programação interpretada de alto nível, caracterizada também, como dinâmica, fracamente tipificada, prototype-based e multi-paradigma.[2] Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web. JavaScript permite páginas da Web interativas e, portanto, é uma parte essencial dos aplicativos da web. A grande maioria dos sites usa, e todos os principais navegadores têm um mecanismo JavaScript dedicado para executá-lo.'
        },

        {
            id: 3,
            title: 'Inteligência artificial',
            image: 'ia.png',
            description: 'O tão proximo estamos da Inteligência artificial?',
            body: 'Quanto tempo falta para os robôs se tornarem melhores atletas que os humanos? E para que os computadores descubram novas leis da matemática? E cheguem ao topo da Billboard com a sua própria cyberboyband? Um estudo calculou quão perto estamos da superação da inteligência artificial em tudo, até nas habilidades mais banais. A conta foi feita com base nas estimativas de cientistas de Oxford e Yale. A primeira superação à vista é a do jogo Angry Birds: em cerca de dois anos, você pode esperar que a inteligência artificial se torne imbatível, melhor do que qualquer jogador humano na categoria “atacar porcos verdes com pássaros raivosos”.'
        },


    ];


    return posts;    
}

module.exports = {
    getPosts: getPosts
}