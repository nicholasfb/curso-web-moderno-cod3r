// IIFE -> Immediately INvoked Function Expression

// Fugindo do escopo global
(function() {
    console.log('Será executa na hora!');
    console.log('Foge do escopo mais abrangente!');
})();

// Está no escopo global
console.log('Será executa na hora!');
console.log('Foge do escopo mais abrangente!');