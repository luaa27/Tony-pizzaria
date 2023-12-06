var perfil = {
    user: [
        {
            nome: 'luana',
            foto: 'luana.jpg',
            telefone: '(11) 96554-2323',
            email: 'luana.santos@gmail.com',
            senha: '123456',
            localizacao: [
                {
                    rua: 'Uma rua bem criativa',
                    bairro: 'Bairro bem legal',
                    pais: 'Brasil',
                    cidade: 'Carapicuiba',
                    estado: 'São Paulo'
                }
            ]
        },
        {
            nome: 'Murilo Rodrigues',
            foto: 'Murilo.jpg',
            telefone: '(11) 92345-7890',
            email: 'Muilo.rodrigues@gmail.com',
            senha: '56789',
            localizacao: [
                {
                    rua: 'Rua bcana',
                    bairro: 'criativo',
                    pais: 'Brasil',
                    cidade: 'Carapicuiba',
                    estado: 'São Paulo'
                }
            ]
        }
    ]
};
var produtos = {
    produto: [
        {
            nome: 'Pizza peperoni com queijo',
            foto: 'pizza_peperoni_com_queijo.jpg',
            categoria: 'pizza',
            preco: '19.65',
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    nome: 'Maria da Silva',
                    foto: 'maria.jpg',
                    data: '15/03/2022',
                    titulo: 'Pizza muito boa!',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '3estrelas.jpg'
                },
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais,recomendo.',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Pizza de peperoni com queijo e tomate',
            foto: 'pizza_peperoni_com_queijo_tomate.jpg',
            categoria: 'pizza',
            preco: '19.00',
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    nome: 'Maria da Silva',
                    foto: 'maria.jpg',
                    data: '15/03/2022',
                    titulo: 'Pizza muito boa!',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '3estrelas.jpg'
                },
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais,recomendo.',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Pizza brotinho com queijo e tomate',
            foto: 'pizza_brotinho_com_queijo_tomate.jpg',
            preco: '12.00',
            categoria: 'pizza',
            favorito: true,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais,recomendo.',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Pizza de frango com catupiry',
            foto: 'pizza_frango_com_catupiry.jpg',
            preco: '23.00',
            categoria: 'pizza',
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais,recomendo.',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Pizza portuguesa com queijo, molho de tomate, calabresa em rodelas, cebola, tomate picado, azeite, orégano e azeitona',
            foto: 'pizza_portuguesa.jpg',
            preco: 'R$ 31.90.',
            categoria: 'pizza',
            favorito: false,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            comentarios: [
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Essa pizza é demais,recomendo.',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Coca-cola 2L',
            foto: 'coca_cola_2l.jpg',
            preco: '14.99.',
            categoria: 'bebidas',
            favorito: false,
            descricao: 'Refrigerante Garrafa 3l\nEmbalagem Econômica',
            comentarios: [
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Coca não tem como errar!',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '5estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Cerveja Heineken',
            foto: 'cerveja_heineken.jpg',
            preco: '17.99',
            categoria: 'bebidas',
            favorito: false,
            descricao: 'Cerveja em Garrafa 3l\nEmbalagem Econômica',
            comentarios: [
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'Estava pessima, muito aguada',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '1estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Pudim de Leite Consensado',
            foto: 'pudim.jpg',
            preco: '22.04',
            categoria: 'sobremesas',
            favorito: false,
            descricao: 'Sobremesa tradicional\nPudim de leite condensado',
            comentarios: [
                {
                    nome: 'Pedro Gomes Dias',
                    foto: 'pedro.jpg',
                    data: '21/05/2022',
                    titulo: 'não gostei muito, pudim bom é só o feito em casa',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '2estrelas.jpg'
                },
                {
                    nome: 'Monica Souza',
                    foto: 'monica.jpg',
                    data: '19/03/2022',
                    titulo: 'Delicioso!',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '5estrelas.jpg'
                }
            ]
        },
        {
            nome: 'Taça da felicidade',
            foto: 'taca_da_felicidade.jpg',
            preco: '12.04',
            categoria: 'sobremesas',
            favorito: false,
            descricao: 'Sobremesa tradicional\nTaças da felicidade de diversos tipos',
            comentarios: [
                {
                    nome: 'Monica Souza',
                    foto: 'monica.jpg',
                    data: '19/03/2022',
                    titulo: 'Nham Nham, o melhor!',
                    conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
                    avaliacao: '4estrelas.jpg'
                }
            ]
        }
    ]
};

module.exports = {
    perfil,
    produtos
}
