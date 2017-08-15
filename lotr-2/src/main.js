//worked with Sarah on homework

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
  // make a ul of hobbits
  let $shireHobbits = $('<ul>');
  // create a variable to sort the hobbits
  const sortedHobbits = hobbits;
  // sort the hobbits using .sort()
  sortedHobbits.sort();
  // loop through the hobbits and create an li for each hobbit
  $.each(sortedHobbits, function(index, hobbit) {
    // console.log('what we got from the array ', hobbit);
    // create a new LI
    // change that LI for name purposes
    // append into UL
    $('<li>').text(hobbit).addClass('hobbit').appendTo($shireHobbits)
  });
  // once all appended, append UL into The Shire
  $('#the-shire').append($shireHobbits);

  // INSTRUCTIONS
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
  // list the hobbits alphabetically.  Maybe use the .sort() method.
}

function keepItSecretKeepItSafe() {
  console.log('Keep It Secret Keep It Safe');
  // make a div for 'the-ring'
  let $ring = $('<div>').attr('id', 'the-ring').html('The Ring');
  // declare all the hobbits in the array as a variable
  let hobbits = $('.hobbit');
  // add an id of 'the-ring' with the inner HTML of "The Ring"
  $ring.appendTo(hobbits[0]);


  // INSTRUCTIONS
  // create an empty div with an id of 'the-ring' and innerHTML of "The ring"
  // add the ring as a child of Frodo
}

function makeBuddies() {
  console.log('Make Buddies');
  //create an aside tag and append it to mordor
  let $firepit = $('<aside>').appendTo('#mordor');
  //create an unordered list of buddies
  let $hobbitBuddies = $('<ul>');
  // loop through the buddies and create an li for each buddy
  $.each(buddies, function(index, buddy) {
    // console.log('what we got from the array ', buddy);
    // create a new LI
    // change that LI for name purposes
    // append into UL
    $('<li>').text(buddy).addClass('buddy').appendTo($hobbitBuddies);
  });
  // once all appended, append UL into The Shire
  $('#mordor').append($hobbitBuddies);


  // INSTRUCTIONS
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
}

function leaveTheShire() {
  console.log('leaving the shire');
  // grab the hobbits and move them to Rivendell
  $('.hobbit').appendTo('#rivendell');
}

// INSTRUCTIONS
// grab the hobbits and move them to Rivendell

function forgeTheFellowShip() {
  console.log('Forge The Fellowship')
  // create a new div called 'the-fellowship'
  let $fellowshipDiv = $('<div>').attr('id', 'the-fellowship');
  //add an h1 with the text 'The Fellowship' to this new div
  let $fellowshipTitle = $('<h1>').html('The Fellowship');
  $fellowshipTitle.appendTo($fellowshipDiv);
  //append the fellowship to rivendell
  $fellowshipDiv.appendTo('#rivendell');
  // append the hobbits and buddies to the fellowship
  const fellowship = $('.hobbit, .buddy');
  for (let i = 0; i < fellowship.length; i++) {
    $fellowshipDiv.append(fellowship[i]);
    console.log(`${fellowship[i].textContent} has joined your party`)
  }

  // INSTRUCTIONS
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added console log that they have joined your party
}

function hornOfGondor() {
  console.log('Horn of Gondor');
  // pop up an alert that the horn of gondor has been blown
  alert('The Horn of Gondor has been blown!');
  // declare all the buddies in an array as a variable
  // put a linethrough on boromir's name
  let $buddies = $('#rivendell div .buddy:last').css('text-decoration', 'line-through');


  // INSTRUCTIONS
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
}

function itsDangerousToGoAlone(){
  console.log('Its Dangerous to go Alone')
  const $frodo = $('.hobbit')[0];
  const $sam = $('.hobbit')[3];
  const $mordor = $('#mordor ul');
  console.log($frodo);
  console.log($mordor);
  //append Frodo to Mordor
  $mordor.append($frodo);
  //append Sam to Mordor
  $mordor.append($sam);
  // add a div with an id of 'mount-doom' to Mordor
  const $mountdoom = $('<div>').attr('id', 'mount-doom');
  //append the div to Mordor
  $mordor.append($mountdoom);


  //INSTRUCTIONS
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
