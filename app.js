// 1a
const jPDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"]

// 1b
function seeDinos(dino1, dino2, dino3) {
    console.log(dino1);
    console.log([dino2, dino3]);
}
seeDinos(...jPDinos)

// 2a
jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
}

// 2b
function seeCharacters ({alanGrant, ellieSattler, ianMalcolm}){
    console.log(ellieSattler);
}
const ellie = seeCharacters(jPCharacters);

// 3a
const jurassicParkMovies = ([
    {one: "Jurassic Park",
    two: "The Lost World:Jurassic Park",
    three: "Jurassic Park III"}], 
    
    [{four: "Jurassic World",
    five: "Jurassic World: Fallen Kingdom"}])

// 3b
function seeJPMovies([{one}, {two}, {three}, {four}, ...{five}]) {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
}

seeJPMovies("Jurassic Park", "The Lost World:Jurassic Park", "Jurassic Park III");