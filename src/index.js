// const {Puodukas} = require ("./Puodukas.js");

// console.log(Puodukas);

// console.log("Hello World !!!");

// let p = new Puodukas();

// console.log(p);

let vardas = "Jonas";
let pavarde = "Jonaitis";

let zmogus = {
    vardas,
    pavarde: pavarde,
    gimimoMetai: 1999,
    pasisveikinimas: function (kalba) {
        if (kalba === "en") { // jeigu kalba anglu
            console.log("Hello", this.vardas, this.pavarde); //iškvies funkcija ir kaip kontekstini kintamaji pakis sita zmogu
        } else { // visais kitais atvejais tegu sveikinasi lietuviskai
            console.log("Labas", this.vardas, this.pavarde);
        }
    }
};
console.log(zmogus);
labas (zmogus);
// zmogus.pasisveikinimas("en");
// zmogus.pasisveikinimas("jp");

function labas ( {vardas , pavarde}) {
    console.log("Labinuosi is labas su", vardas, pavarde);
}
