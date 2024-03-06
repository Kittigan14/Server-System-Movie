//  INSERT MOVIES TABLE
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');

// const moviesData = [
//     [1,
//         'Inception',
//         '2h 28m',
//         '2010-07-16',
//         11,
//         '../images/MoviesImg/Inception.jpg',
//         'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.'
//     ],
//     [2,
//         'The Dark Knight',
//         '2h 32m', '2008-07-18',
//         1,
//         '../images/MoviesImg/The Dark Knight.jpg',
//         'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
//     ],
//     [3,
//         'Interstellar',
//         '2h 49m',
//         '2014-11-07',
//         11,
//         '../images/MoviesImg/Interstellar.jpg',
//         'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.'
//     ],
//     [4,
//         'Forrest Gump',
//         '2h 22m',
//         '1994-07-06',
//         3,
//         '../images/MoviesImg/Forrest Gump.jpg',
//         'The history of the United States from the 1950s to the 70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.'
//     ],
//     [5,
//         'The Shawshank Redemption',
//         '2h 32m',
//         '1994-09-10',
//         12,
//         '../images/MoviesImg/The Shawshank.jpg',
//         'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.'
//     ],
//     [6,
//         'The Godfather',
//         '2h 55m',
//         '1972-03-24',
//         7,
//         '../images/MoviesImg/The Godfather.jpg',
//         'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
//     ],
//     [7,
//         'Pulp Fiction',
//         '2h 34m',
//         '1994-10-14',
//         12,
//         '../images/MoviesImg/Pulp Fiction.jpg',
//         'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
//     ],
//     [8,
//         'The Lord of the Rings: The Fellowship of the Ring', 
//         '2h 58m',
//         '2001-12-19',
//         2,
//         '../images/MoviesImg/The Lord of the Rings.png',
//         'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.'
//     ],
//     [9, 
//         'The Lion King',
//         '1h 28m',
//         '1994-06-15',
//         1,
//         '../images/MoviesImg/The Lion King.jpg',
//         'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.'
//     ],
//     [10, 
//         'Schindler\'s List', 
//         '3h 15m',
//         '1993-12-15', 
//         7, 
//         '../images/MoviesImg/Schindler s List.jpg',
//         'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.'
//     ],
//     [11, 
//         'Fight Club', 
//         '2h 19m',
//         '1999-10-15', 
//         12, 
//         '../images/MoviesImg/Fight Club.jpg',
//         'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.'
//     ],
//     [12, 
//         'The Matrix Reloaded', 
//         '2h 18m',
//         '2003-05-15', 
//         11,
//         '../images/MoviesImg/The Matrix Reloaded.jpg',
//         'Freedom fighters Neo, Trinity and Morpheus continue to lead the revolt against the Machine Army, unleashing their arsenal of extraordinary skills and weaponry against the systematic forces of repression and exploitation.'
//     ],
//     [13, 
//         'The Matrix Revolutions', 
//         '2h 9m',
//         '2003-11-05', 
//         11, 
//         '../images/MoviesImg/The Matrix Revolutions.jpg',
//         'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.'
//     ],
//     [14, 
//         'Jurassic Park', 
//         '2h 7m',
//         '1993-06-11', 
//         2, 
//         '../images/MoviesImg/Jurassic Park.jpg',
//         'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park is cloned dinosaurs to run loose.'
//     ],
//     [15, 
//         'The Terminator', 
//         '1h 47m',
//         '1984-10-26', 
//         1, 
//         '../images/MoviesImg/The Terminator.jpg',
//         'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity is future salvation.'
//     ],
//     [16, 
//         'Casablanca', 
//         '1h 42m',
//         '1942-11-26', 
//         10, 
//         '../images/MoviesImg/Casablanca.jpg',
//         'A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.'
//     ],
//     [17, 
//         'Gone with the Wind', 
//         '3h 58m',
//         '1939-12-15', 
//         10, 
//         '../images/MoviesImg/Gone with the Wind.jpg',
//         'A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.'
//     ],
//     [18, 
//         'Citizen Kane', 
//         '1h 59m',
//         '1941-05-01', 
//         10, 
//         '../images/MoviesImg/Citizen Kane.jpg',
//         'Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: Rosebud.'
//     ],
//     [19, 
//         'E.T. the Extra-Terrestrial', 
//         '1h 55m',
//         '1982-06-11', 
//         11, 
//         '../images/MoviesImg/E.T. the Extra-Terrestrial.jpg',
//         'A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.'
//     ],
//     [20, 
//         'Avatar', 
//         '2h 42m',
//         '2009-12-18', 
//         2, 
//         '../images/MoviesImg/Avatar.jpg',
//         'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.'
//     ],
// ];

// const moviesInsert = db.prepare('INSERT INTO Movies VALUES (?, ?, ?, ?, ?, ?, ?)');
// moviesData.forEach(data => moviesInsert.run(data));
// moviesInsert.finalize();

// db.close();

//  INSERT GENRES TABLE
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');

// const genresData = [
//   [1  , 'Action'   ],
//   [2  , 'Adventure'],
//   [3  , 'Comedy'   ],
//   [7  , 'History'  ],
//   [9  , 'Mystery'  ],
//   [10 , 'Romance'  ],
//   [11 , 'Sci-fi'   ],
//   [12 , 'Thriller' ],
//   [13 , 'Western'  ]
// ];

// const genresInsert = db.prepare('INSERT INTO Genres VALUES (?, ?)');
// genresData.forEach(data => genresInsert.run(data));
// genresInsert.finalize();

// db.close();


// INSERT REVIEWS
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');

// const Reviewsdata = [
//     [1 , 'Today I had the opportunity to watch the third and fourth round of Inception. Feeling stuck again, so I came to read Pantip during the movie is start. I can see many comments saying that it is the best movie they have ever seen. This thread therefore invites you to talk about your impressions of this matter. Ours is probably beyond the plot and cast that are very appropriate. We have never seen any other films by Director Nolan, but we admit that Really awesome Actually, I am still confused about many points in the movie. But you have to find the answer. By the way, maybe we are dreaming.', 1, 1 ],
//     [2 , 'Heath Ledger is Joker steals the show, elevating The Dark Knight into a dark and gripping masterpiece.', 1, 2 ],
//     [3 , 'Interstellar weaves an emotional and visually stunning tale of space exploration and the human spirit.', 1, 3 ],
//     [4 , 'Forrest Gump is a heartwarming tale that seamlessly blends humor, emotion, and historical events.', 1, 4 ],
//     [5 , 'Shawshank Redemption is a triumph of storytelling, a tale of hope, friendship, and the human spirit.', 1, 5 ],
//     [6 , 'The Godfather is a cinematic masterpiece that immerses viewers in the world of organized crime, blending power, family, and tragedy seamlessly.', 1, 6 ],
//     [7 , 'Pulp Fiction is a groundbreaking cinematic experience, weaving together multiple narratives with non-linear storytelling and Tarantino is signature wit.', 1, 7 ],
//     [8 , 'The Fellowship of the Ring introduces audiences to Middle-earth with breathtaking visuals and a compelling narrative.', 1, 8 ],
//     [9 , 'The Lion King is an animated masterpiece, combining stunning visuals, a memorable soundtrack, and a timeless coming-of-age story.', 1, 9 ],
//     [10, 'Schindler is List is a haunting and powerful exploration of one man is moral awakening during the Holocaust.', 1, 10],
//     [11, 'Fight Club is a thought-provoking exploration of societal discontent and the search for identity. Fincher is direction, combined with stellar performances, creates a mind-bending and unforgettable film.', 1, 11],
//     [12, 'The Matrix Reloaded expands the mind-bending universe introduced in the first film, delivering thrilling action sequences and delving deeper into the philosophical questions raised by the original.', 1, 12],
//     [13, 'The Matrix Revolutions concludes the trilogy with epic battles and a resolution to the philosophical themes explored throughout the series. While not without its critiques, it remains a visually impressive and thought-provoking installment.', 1, 13],
//     [14, 'Jurassic Park revolutionized filmmaking with its groundbreaking special effects, bringing dinosaurs to life in a thrilling adventure. Spielberg is direction and John Williams score contribute to its status as a cinematic classic.', 1, 14],
//     [15, 'James Cameron is The Terminator is a sci-fi classic that blends suspense, action, and groundbreaking effects.', 1, 15],
//     [16, 'Casablanca is a timeless romance set against the backdrop of World War II.', 1, 16],
//     [17, 'Gone with the Wind is an epic tale of love and loss set against the backdrop of the American Civil War.', 1, 17],
//     [18, 'Orson Welles Citizen Kane is a groundbreaking work of cinema that revolutionized storytelling and cinematography.', 1, 18],
//     [19, 'E.T. is a heartwarming and magical adventure that captures the essence of childhood wonder.', 1, 19],
//     [20, 'James Cameron is Avatar is a visually stunning and immersive cinematic experience that transports audiences to the lush world of Pandora.', 1, 20],
// ];

// const reviewsInsert = db.prepare('INSERT INTO Reviews VALUES (?, ?, ?, ?)');
// Reviewsdata.forEach(data => reviewsInsert.run(data));
// reviewsInsert.finalize();

// db.close();


// INSERT USERSDATA
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');

// const Usersdata = [
//     [1, 'kittikarn', 'kittigan1486@gmail.com', '14082003'],
//     [2, 'sxdx', 'sxdx3@gmail.com', '14082546'],
//     [3, 'Papaya', 'nay25140@gmail.com', '12345678'],
//     [4, 'Ohomg', 'ohomg55@gmail.com', '2408888'],
//     [5, 'Pxydxwn', 'pxydxwn@gmail.com', '254666']
// ];

// const UsersInsert = db.prepare('INSERT INTO Users VALUES (?, ?, ?, ?)');
// Usersdata.forEach(data => UsersInsert.run(data));
// UsersInsert.finalize();
// db.close();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');
db.run('DELETE FROM Reviews')
db.close();