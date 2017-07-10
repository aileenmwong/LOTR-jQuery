// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  'Frodo Baggins',
  'Samwise "Sam" Gamgee',
  'Meriadoc "Merry" Brandybuck',
  'Peregrin "Pippin" Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  'Sauron',
  'Saruman',
  'The Uruk-hai',
  'Orcs'
];

const lands = [
  'the-shire',
  'rivendell',
  'mordor'
];

// ====================================
//           Chapters
// ====================================

function makeMiddleEarth() {
  console.log("Trying to make middle earth.");
  // create a section tag with an id of middle-earth
  // append the section to the body of the DOM
  const $section = $('<section/>').appendTo('body');
  $section.attr('id', 'middle-earth');
  // add each land to the section as article tags-- try using a loop
  for (let i = 0; i < lands.length; i++) {
    // add each land to the section as article tags-- try using a loop
    const $landArticle = $('<article/>').appendTo('#middle-earth');
    // assign the id of the corresponding article tag as the name of the land
    $landArticle.attr('id', lands[i]);
    // inside each article tag include an h1 with the name of the land
    const $landH1 = $('<h1/>').appendTo($landArticle);
    $landH1.text(lands[i]);
  }
}

function makeHobbits() {
  console.log('Make hobbits');
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  // list the hobbits alphabetically.  Maybe use the .sort() method.
}

function keepItSecretKeepItSafe() {
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
}

function makeBuddies() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
}

function leaveTheShire() {
  // grab the hobbits and move them to Rivendell
}

function forgeTheFellowShip() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added console log that they have joined your party
}

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
}

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Create a condition (Maybe an IF statement) that changes the font-color of the ring div to Red if
  // it is a child of the div with the id 'gollum'
  // Move Gollum into Mount Doom
}

function thereAndBackAgain() {
  // remove Gollum and the Ring from the DOM
  // Move all the hobbits back to the shire
}

function golemGotCash() {
  // for those that made it through, 
  // add a div to the body
  // give it an id of 'lord-of-the-bling'
  // YOU WIN!
}

// =================================
// What to do when the page is ready
// =================================

window.onload = function() {
  $('#b1').on('click', makeMiddleEarth);
  document.querySelector('#b2').addEventListener('click', makeHobbits);
  document.querySelector('#b3').addEventListener('click', keepItSecretKeepItSafe);
  document.querySelector('#b5').addEventListener('click', makeBuddies);
  document.querySelector('#b6').addEventListener('click', leaveTheShire);
  document.querySelector('#b8').addEventListener('click', forgeTheFellowShip);
  document.querySelector('#b10').addEventListener('click', hornOfGondor);
  document.querySelector('#b11').addEventListener('click', itsDangerousToGoAlone);
  document.querySelector('#b12').addEventListener('click', weWantsIt);
  document.querySelector('#b13').addEventListener('click', thereAndBackAgain);

};