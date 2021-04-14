const nomePetshor = '*** Petshop DH ***';

let pets = [ 
{
nome: 'Bob',
idade: 2,
raca: 'pug',
tipo: 'cachorro',
vacinado: true,
genero: 'M',
servicos: ['banho', 'tosa'] 
}, 
{
    nome: 'Snoop',
    idade: 4,
    raca: 'pug',
    tipo: 'cachorro',
    vacinado: true,
    genero: 'M',
    servicos: ['banho'] 
    }, 
    {
        nome: 'Paçoca',
        idade: 10,
        raca: 'vira-lata caramelo',
        tipo: 'cachorro',
        vacinado: true,
        genero: 'F',
        servicos: ['tosa'] 
        } 
    ];


const adicionarPet = (infoPet) => {
 pets.push(infoPet);
}
adicionarPet({
    nome: 'Rex',
    idade: 5,
    raca: 'pudle',
    tipo: 'cachorro',
    vacinado: false,
    genero: 'M',
    servicos: ['banho'] 
});

console.log(pets)