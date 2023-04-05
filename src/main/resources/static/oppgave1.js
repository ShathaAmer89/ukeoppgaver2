function vismelding(){
const person1={
    navn:"shatha",
    adresse:"linneaveien",
    telefonnummer: 96671715
};
const person2={
    navn:"Aws",
adresse:"linneaveien",
telefonnummer:96671715
};
const person3={
    navn:"Aram",
    adresse: "linneaveien",
    telefonnummer: 96671715
};
let personregistrering=[];
personregistrering.push(person1);
personregistrering.push(person2);
personregistrering.push(person3);
let ut="";
for (let k of personregistrering) {

    ut += k.navn + " " + k.adresse + " " + k.telefonnummer + "<br>";
    console.log(k.navn +" "+ k.adresse +" "+ k.telefonnummer);
}
    document.getElementById("vis").innerHTML=ut;

}