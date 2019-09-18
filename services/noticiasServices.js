var getNoticias = function(){
    var noticias = [
        {
            id: 1,
            title: 'ZELDA: LINK’S AWAKENING; VEJA COMPARAÇÃO GRÁFICA COM SEU SUCESSOR',
            image: 'zelda.jpg',
            description: 'No video da equipe do site Kotaku mostra a comparação ao novo e ao antigo jogo.',
            link: 'https://www.voxel.com.br/noticias/zelda-link-s-awakening-jogo-novo-switch-veja-comparacao-grafica_845745.htm',
        },

        {
            id: 2,
            title: 'TESTE BETA DE NIOH 2 COMEÇA EM NOVEMBRO',
            image: 'Niohk.jpg',
            description: 'Nioh 2 ganha uma data para início de seu teste Beta.',
            link: 'https://www.voxel.com.br/noticias/teste-beta-nioh-2-comeca-novembro_845768.htm',
        },

        {
            id: 3,
            title: 'GEARS OF WAR 5 É O MAIOR LANÇAMENTO DA NOVA GERAÇÃO DA MICROSOFT',
            image: 'war5.jpg',
            description: 'Gears of War 5 alcançou números impressionantes em sua primeira semana de vendas.',
            link: 'https://www.voxel.com.br/noticias/gears-of-war-5-maior-lancamento-nova-geracao-da-microsoft_845765.htm',
        },

        {
            id: 4,
            title: 'A PLAGUE TALE PROMOVE PRIMEIRO CAPÍTULO DE GRAÇA',
            image: 'plague.jpg',
            description: 'Focus Home liberou hoje o primeiro capítulo de graça para os jogadores.',
            link: 'https://www.voxel.com.br/noticias/plague-tale-innocence-promove-primeiro-capitulo-graca_845735.htm',
        },

        {
            id: 5,
            title: 'GTA SAN ANDREAS ESTÁ GRATUITO',
            image: 'gta.jpg',
            description: 'GTA San Andreas está disponível gratuitamente e por tempo limitado',
            link: 'https://www.voxel.com.br/noticias/corre-gta-san-andreas-gratuito-pc-sempre_845777.htm',
        },

        {
            id: 6,
            title: 'VOCÊ NÃO PODE NAMORAR KEANU REEVES',
            image: 'cyber.jpg',
            description: 'O personagem Johnny Siverhand não estara disponivel para namorar em Cyberpunk 2077',
            link: 'https://www.voxel.com.br/noticias/coracao-partido-voce-nao-namorar-keanu-reeves-cyberpunk-2077_845732.htm',
        },



    ];


    return noticias;    
}

module.exports = {
    getNoticias: getNoticias
}