//Botão Modo Light e Modo Dark
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let nav = document.querySelector('nav')
let footer = document.querySelector('footer')
let button = document.querySelector('button')

trilho.addEventListener('click', function() {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    nav.classList.toggle('dark')
    footer.classList.toggle('dark')
    button.classList.toggle('dark')
});


//Botão Fale Comigo
document.getElementById('faleComigo').addEventListener('click', function() {
    const meuEmail = "student.leonardocastro@gmail.com";
    alert(`Meu email para contato é: ${meuEmail}`);
});
console.log("Script está funcionando!");