const data = require('./data');

// console.log(data[0]);

// array.prototype.find()
// return the first item matching the callback function

// finda all objs have id less than 2
const found = data.find(e => e.id < 2);
// console.log(found);


// find all players with score > 730
const score = 730;
const player = data.find( player =>
    player.career_goals > score );
// console.log(player.first_name + ' ' + player.last_name)

// find object where index is  2
const playerIndex = data.find((pl, i) => i === 2);
console.log(playerIndex.last_name);

// ------------------------------------

// Array.prototype.filter()
// return list matching filter criteria
const playerRoles = data.filter(p => p.position.toLowerCase() === 'striker');
// console.log(playerRoles)

