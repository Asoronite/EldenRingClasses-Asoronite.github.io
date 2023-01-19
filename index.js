const classes = [
  {
    name: " Astrologer",
    bild: ".pics/astrologer_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 9",
    mind: "Mind 15",
    endurance: "Endurance 9",
    strength: "Strength 8",
    dexterity: "Dexterity 12",
    intelligence: "Intelligence 16",
    faith: "Faith 7",
    arcane: "Arcane 9",
  },
  {
    name: " Vagabond",
    bild: "pics/vagabond_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 15",
    mind: "Mind 10",
    endurance: "Endurance 11",
    strength: "Strength 14",
    dexterity: "Dexterity 13",
    intelligence: "Intelligence 9",
    faith: "Faith 9",
    arcane: "Arcane 7",
  },
  {
    name: " Bandit",
    bild: "pics/bandit_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 15",
    mind: "Mind 11",
    endurance: "Endurance 10",
    strength: "Strength 8",
    dexterity: "Dexterity 13",
    intelligence: "Intelligence 9",
    faith: "Faith 8",
    arcane: "Arcane 14",
  },
  {
    name: " Hero",
    bild: "pics/hero_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 14",
    mind: "Mind 9",
    endurance: "Endurance 12",
    strength: "Strength 16",
    dexterity: "Dexterity 9",
    intelligence: "Intelligence 7",
    faith: "Faith 8",
    arcane: "Arcane 11",
  },
  {
    name: " Warrior",
    bild: "pics/warrior_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 11",
    mind: "Mind 12",
    endurance: "Endurance 11",
    strength: "Strength 10",
    dexterity: "Dexterity 16",
    intelligence: "Intelligence 10",
    faith: "Faith 8",
    arcane: "Arcane 9",
  },
  {
    name: " Wretch",
    bild: "pics/wretch_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 10",
    mind: "Mind 10",
    endurance: "Endurance 10",
    strength: "Strength 10",
    dexterity: "Dexterity 10",
    intelligence: "Intelligence 10",
    faith: "Faith 10",
    arcane: "Arcane 10",
  },
  {
    name: " Confessor",
    bild: "pics/confessor_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 10",
    mind: "Mind 13",
    endurance: "Endurance 10",
    strength: "Strength 12",
    dexterity: "Dexterity 12",
    intelligence: "Intelligence 9",
    faith: "Faith 14",
    arcane: "Arcane 9",
  },
  {
    name: " Prisoner",
    bild: "pics/prisoner_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 11",
    mind: "Mind 12",
    endurance: "Endurance 11",
    strength: "Strength 11",
    dexterity: "Dexterity 14",
    intelligence: "Intelligence 14",
    faith: "Faith 6",
    arcane: "Arcane 9",
  },
  {
    name: " Prophet",
    bild: "pics/prophet_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 10",
    mind: "Mind 14",
    endurance: "Endurance 8",
    strength: "Strength 11",
    dexterity: "Dexterity 10",
    intelligence: "Intelligence 7",
    faith: "Faith 16",
    arcane: "Arcane 10",
  },
  {
    name: " Samurai",
    bild: "pics/samurai_class_elden_ring_wiki_guide_200px.png",
    vigor: "Vigor 12",
    mind: "Mind 11",
    endurance: "Endurance 13",
    strength: "Strength 12",
    dexterity: "Dexterity 15",
    intelligence: "Intelligence 9",
    faith: "Faith 8",
    arcane: "Arcane 8",
  },
];

let className = document.getElementById("className");
let bild = document.getElementById("pic");
let vigor = document.getElementById("vigor");
let nextBtn = document.getElementById("nextBtn");
let preBtn = document.getElementById("preBtn");
let random = document.getElementById("random");


let currentClass = 0

function allContent (a) {
    a = currentClass;
    className.innerHTML = classes[a].name;
    bild.src = classes[a].bild;
    vigor.innerHTML = classes[a].vigor;
    mind.innerHTML = classes[a].mind;
    endurance.innerHTML = classes[a].endurance;
    strength.innerHTML = classes[a].strength;
    dexterity.innerHTML = classes[a].dexterity;
    intelligence.innerHTML = classes[a].intelligence;
    faith.innerHTML = classes[a].faith;
    arcane.innerHTML = classes[a].arcane;
}

window.addEventListener("DOMContentLoaded",function (){
    allContent()
})

nextBtn.addEventListener("click", function(){
    currentClass++;
    if(currentClass>9){
        currentClass=0;
    };
    allContent()
console.log(currentClass);
})
preBtn.addEventListener("click", function () {
    currentClass--;
  if(currentClass <0 ){
    currentClass = 9;
  };
  allContent();
});
random.addEventListener("click", function (){
    const rambo = Math.floor(Math.random()*10)
    console.log(rambo);
    currentClass = rambo
    allContent();
});
