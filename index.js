const nomePetshop = "*** PETSHOP DH  ***";
​
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
        nome: 'Snoopy',
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
​
​
// function adicionarPet(){
// }
​
​
​
// declarando função - arrow function
const adicionarPet = (infoPet) => {
    pets.push(infoPet);
}
​
//executando função
adicionarPet({
    nome: 'Rex',
    idade: 4,
    raca: 'caramelo',
    tipo: 'cachorro',
    vacinado: false,
    genero: 'M',
    servicos: ['banho']
});
​
​
console.log(pets);