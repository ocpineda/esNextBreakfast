/*
Here we'll take a look at destructuring an object.  Notice that the
properties are mapped according to the variable that matches the
property name
 ---------------
 */

const beatles = {
    vocals: 'John Lennon',
    bass: 'Paul McCartney',
    guitar: 'George Harrison',
    drums: 'Ringo Starr'
};

const { bass, drums } = beatles;

console.log(`bass: ${bass}`);
console.log(`drums: ${drums}`);

console.log(`
---------------
`);



/*
Alternatively, we can have properties mapped to new variable names
while destructuring
 ---------------
 */

const pearlJam = {
    vocals: 'Eddie Vedder',
    guitar: 'Mike McCready',
    rhythm: 'Stone Gossard',
    bass: 'Jeff Ament',
    drums: 'Dave Krusen'
};

const { vocals: singer } = pearlJam;

console.log(`the lead singer of Pearl Jam is ${singer}`);

console.log(`
---------------
`);



/*
We can even go a little nuts and assign nested properties using the
same property mapping strategy.  Note that we can get a little nuts
 ---------------
 */

const ten = {
    artist: 'Pearl Jam',
    release: '1991',
    notableSongs: ['Even Flow', 'Black', 'Jeremy', 'Alive'],
    bandMembers: {
        vocals: 'Eddie Vedder',
        guitar: 'Mike McCready',
        rhythm: 'Stone Gossard',
        bass: 'Jeff Ament',
        drums: 'Dave Krusen'
    }
};

const { release: year, artist, notableSongs: [ exampleSong ], bandMembers: { vocals: lyricist, guitar} } = ten;

console.log(`Ten was the first studio album by ${artist},
released in ${year} with hit songs like ${exampleSong},
and notable performances by ${lyricist} and ${guitar}`);

console.log(`
---------------
`);



/*
Object destructuring also gives us the ability to set default values
if a property in an object isn't set
 ---------------
 */

const marilynMansonAndTheSpookyKids = {
    founded: 1989,
    leadSinger: 'Marilyn Manson'
};

const { leadSinger: mmSinger, inspiredBy: mmInspiredBy = 'David Bowie' } = marilynMansonAndTheSpookyKids;

console.log(`Like just about everyone else, ${mmSinger} was inspired by ${mmInspiredBy}`);

const rageAgainstTheMachine = {
    founded: 1991,
    leadSinger: 'Zach de la Rocha',
    inspiredBy: 'Mick Jagger'
};

const { leadSinger: ratmSinger, inspiredBy: ratmInspiredBy = 'David Bowie' } = rageAgainstTheMachine;

console.log(`Bet you didn't know ${ratmSinger} was heavily inspired by ${ratmInspiredBy}`);

console.log(`
---------------
`);



/*
Default values in destructured objects are especially helpful if you're
expecting an options object passed into a function
 ---------------
 */

function createRockstar(name, {hair = 'long', playsGuitar = true}) {
    console.log(`Created new rockstar ${name}
    with ${hair} hair and ${playsGuitar ? `does` : `doesn't`} play guitar`)
}

createRockstar(`Zach de la Rocha`, {playsGuitar: false});