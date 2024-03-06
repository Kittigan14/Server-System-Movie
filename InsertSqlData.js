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
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');

const Reviewsdata = [
    [1 , 'Today I had the opportunity to watch the third and fourth round of Inception. Feeling stuck again, so I came to read Pantip during the movie is start. I can see many comments saying that it is the best movie they have ever seen. This thread therefore invites you to talk about your impressions of this matter. Ours is probably beyond the plot and cast that are very appropriate. We have never seen any other films by Director Nolan, but we admit that Really awesome Actually, I am still confused about many points in the movie. But you have to find the answer. By the way, maybe we are dreaming.', 1, 1 ],
    [2 , 'Heath Ledger is Joker steals the show, elevating The Dark Knight into a dark and gripping masterpiece.', 1, 2 ],
    [3 , 'Interstellar weaves an emotional and visually stunning tale of space exploration and the human spirit.', 1, 3 ],
    [4 , 'Forrest Gump is a heartwarming tale that seamlessly blends humor, emotion, and historical events.', 1, 4 ],
    [5 , 'Shawshank Redemption is a triumph of storytelling, a tale of hope, friendship, and the human spirit.', 1, 5 ],
    [6 , 'The Godfather is a cinematic masterpiece that immerses viewers in the world of organized crime, blending power, family, and tragedy seamlessly.', 1, 6 ],
    [7 , 'Pulp Fiction is a groundbreaking cinematic experience, weaving together multiple narratives with non-linear storytelling and Tarantino is signature wit.', 1, 7 ],
    [8 , 'The Fellowship of the Ring introduces audiences to Middle-earth with breathtaking visuals and a compelling narrative.', 1, 8 ],
    [9 , 'The Lion King is an animated masterpiece, combining stunning visuals, a memorable soundtrack, and a timeless coming-of-age story.', 1, 9 ],
    [10, 'Schindler is List is a haunting and powerful exploration of one man is moral awakening during the Holocaust.', 1, 10],
    [11, 'Fight Club is a thought-provoking exploration of societal discontent and the search for identity. Fincher is direction, combined with stellar performances, creates a mind-bending and unforgettable film.', 1, 11],
    [12, 'The Matrix Reloaded expands the mind-bending universe introduced in the first film, delivering thrilling action sequences and delving deeper into the philosophical questions raised by the original.', 1, 12],
    [13, 'The Matrix Revolutions concludes the trilogy with epic battles and a resolution to the philosophical themes explored throughout the series. While not without its critiques, it remains a visually impressive and thought-provoking installment.', 1, 13],
    [14, 'Jurassic Park revolutionized filmmaking with its groundbreaking special effects, bringing dinosaurs to life in a thrilling adventure. Spielberg is direction and John Williams score contribute to its status as a cinematic classic.', 1, 14],
    [15, 'James Cameron is The Terminator is a sci-fi classic that blends suspense, action, and groundbreaking effects.', 1, 15],
    [16, 'Casablanca is a timeless romance set against the backdrop of World War II.', 1, 16],
    [17, 'Gone with the Wind is an epic tale of love and loss set against the backdrop of the American Civil War.', 1, 17],
    [18, 'Orson Welles Citizen Kane is a groundbreaking work of cinema that revolutionized storytelling and cinematography.', 1, 18],
    [19, 'E.T. is a heartwarming and magical adventure that captures the essence of childhood wonder.', 1, 19],
    [20, 'James Cameron is Avatar is a visually stunning and immersive cinematic experience that transports audiences to the lush world of Pandora.', 1, 20],
    [21, 'A mind-bending masterpiece that explores the depths of dreams and reality.', 2, 1],
    [22, 'A gripping and dark portrayal of the Batman universe, elevated by Heath Ledger is iconic performance as the Joker.', 2, 2],
    [23, 'A visually stunning and emotionally powerful sci-fi epic that explores the vastness of space and the human spirit.', 2, 3],
    [24, 'A heartwarming and beautifully crafted tale of a man is extraordinary journey through life.', 2, 4],
    [25, 'A compelling and emotionally charged story of hope, friendship, and redemption.', 2, 5],
    [26, 'Francis Ford Coppola is masterpiece, The Godfather, is an epic tale of power, family, and crime.', 2, 6],
    [27, 'Quentin Tarantino is Pulp Fiction is a bold and unconventional masterpiece that redefined storytelling.', 2, 7],
    [28, 'Peter Jackson is epic fantasy adaptation captures the magic and grandeur of J.R.R. Tolkien is world.', 2, 8],
    [29, 'A timeless animated classic with breathtaking animation, memorable characters, and a powerful soundtrack.', 2, 9],
    [30, 'Steven Spielberg is Schindler is List is a haunting and powerful portrayal of one man is moral journey during the Holocaust.', 2, 10],
    [31, 'David Fincher is Fight Club is a provocative and thought-provoking exploration of identity and societal discontent.', 2, 11],
    [32, 'The Matrix Reloaded expands the groundbreaking universe introduced in the first film, delivering spectacular action sequences.', 2, 12],
    [33, 'The Matrix Revolutions concludes the trilogy with epic battles and a resolution to the philosophical themes explored throughout the series.', 2, 13],
    [34, 'Steven Spielberg is Jurassic Park is a groundbreaking adventure that revolutionized special effects in filmmaking.', 2, 14],
    [35, 'James Cameron is The Terminator is a sci-fi classic that blends suspense, action, and groundbreaking effects.', 2, 15],
    [36, 'Casablanca is a timeless romance set against the backdrop of World War II.', 2, 16],
    [37, 'Gone with the Wind is an epic tale of love and loss set against the backdrop of the American Civil War.', 2, 17],
    [38, 'Orson Welles Citizen Kane is a groundbreaking work of cinema that revolutionized storytelling and cinematography.', 2, 18],
    [39, 'E.T. is a heartwarming and magical adventure that captures the essence of childhood wonder.', 2, 19],
    [40, 'The film is groundbreaking use of 3D technology set a new standard for visual spectacle.', 2, 20],
    [41, 'Christopher Nolan is direction creates a visually stunning and intellectually engaging experience.', 3, 1],
    [42, 'Christopher Nolan is direction brings a level of realism and complexity to the superhero genre.', 3, 2],
    [43, 'Christopher Nolan is attention to scientific detail and storytelling brilliance shine throughout.', 3, 3],
    [44, 'Tom Hanks portrayal of Forrest is both charming and Oscar-worthy.', 3, 4],
    [45, 'Tim Robbins and Morgan Freeman deliver stellar performances, bringing depth to their characters.', 3, 5],
    [46, 'Marlon Brando is iconic performance as Vito Corleone is a highlight of the film.', 3, 6],
    [47, 'The film is non-linear structure and witty dialogue make it a unique cinematic experience.', 3, 7],
    [48, 'The Fellowship of the Ring sets the stage with breathtaking visuals and a compelling narrative.', 3, 8],
    [49, 'The Lion King is coming-of-age story resonates with audiences of all ages.', 3, 9],
    [50, 'Liam Neeson is portrayal of Oskar Schindler is a triumph, conveying both humanity and despair.', 3, 10],
    [51, 'Edward Norton and Brad Pitt deliver riveting performances, bringing complexity to their characters.', 3, 11],
    [52, 'Keanu Reeves Neo continues to be a compelling and iconic character.', 3, 12],
    [53, 'The film balances action and philosophy, providing a satisfying conclusion to Neo is journey.', 3, 13],
    [54, 'The film is realistic portrayal of dinosaurs and thrilling sequences set a new standard for the genre.', 3, 14],
    [55, 'Arnold Schwarzenegger is portrayal of the Terminator has become iconic in popular culture.', 3, 15],
    [56, 'Humphrey Bogart and Ingrid Bergmans on-screen chemistry creates a memorable and enduring love story.', 3, 16],
    [57, 'Vivien Leighs portrayal of Scarlett O Hara is a captivating and complex performance.', 3, 17],
    [58, 'The film is non-linear narrative and innovative use of deep focus have become hallmarks of its brilliance.', 3, 18],
    [59, 'Steven Spielberg is direction and John Williams score contribute to the film is emotional resonance.', 3, 19],
    [60, 'The films groundbreaking use of 3D technology set a new standard for visual spectacle.', 3, 20],
    [61, 'The intricate plot and brilliant performances, especially by Leonardo DiCaprio, keep you on the edge of your seat.', 4, 1],
    [62, 'The film is moral dilemmas and intense action sequences make it a standout in the genre.', 4, 2],
    [63, 'The film is emotional depth is heightened by Hans Zimmer is evocative score.', 4, 3],
    [64, 'The film is unique approach to historical events adds a layer of humor and nostalgia.', 4, 4],
    [65, 'The film is pacing and narrative structure keep the audience engaged from start to finish.', 4, 5],
    [66, 'The storytelling is rich and immersive, with memorable characters and intense drama.', 4, 6],
    [67, 'Memorable characters, such as Jules and Vincent, add to the film is cult status.', 4, 7],
    [68, 'The ensemble cast, stunning landscapes, and Howard Shores score contribute to the film is greatness.', 4, 8],
    [69, 'The emotional depth and impactful themes make it more than just a children is film.', 4, 9],
    [70, 'The film is black-and-white cinematography adds a stark realism to the historical narrative.', 4, 10],
    [71, 'The film is dark humor and mind-bending plot twists keep audiences engaged from start to finish.', 4, 11],
    [72, 'The film delves deeper into the philosophical questions raised by the original Matrix.', 4, 12],
    [73, 'The Wachowskis continue to push the boundaries of visual effects and cinematic storytelling.', 4, 13],
    [74, 'John Williams iconic score adds to the suspense and wonder of the prehistoric world.', 4, 14],
    [75, 'The film is relentless pace and inventive storytelling contributed to its success.', 4, 15],
    [76, 'The film is dialogue is filled with iconic quotes that have become part of cinematic history.', 4, 16],
    [77, 'The film is sweeping visuals, memorable score, and iconic scenes contribute to its grandeur.', 4, 17],
    [78, 'Orson Welles performance as Charles Foster Kane is a tour de force in acting.', 4, 18],
    [79, 'The relationship between Elliott and E.T. is the heart of the film, creating a timeless connection with audiences.', 4, 19],
    [80, 'Avatars environmental themes and epic scope contribute to its monumental success.', 4, 20],
    [81, 'Hans Zimmer is score enhances the film is intensity, adding to its overall brilliance.', 5, 1],
    [82, 'The Dark Knight is a superhero film that transcends the genre, setting a new standard.', 5, 2],
    [83, 'Matthew McConaughey delivers a compelling performance, adding a human touch to the cosmic journey.', 5, 3],
    [84, 'The emotionally resonant soundtrack enhances the storytelling.', 5, 4],
    [85, 'The Shawshank Redemption is a testament to the enduring power of the human spirit.', 5, 5],
    [86, 'It stands as a cinematic achievement, setting the standard for crime dramas.', 5, 6],
    [87, 'Pulp Fiction remains a cultural touchstone for its innovation and pop culture impact.', 5, 7],
    [88, 'It successfully brings Middle-earth to life, laying the foundation for an unforgettable trilogy.', 5, 8],
    [89, 'The Lion King remains a pinnacle of Disney animation, celebrated for its enduring legacy.', 5, 9],
    [90, 'It stands as a testament to the atrocities of the past and the resilience of the human spirit.', 5, 10],
    [91, 'It challenges conventional norms and invites viewers to question their own perceptions.', 5, 11],
    [92, 'While not without its criticisms, The Matrix Reloaded remains a visually impressive and ambitious sequel.', 5, 12],
    [93, 'The Matrix Revolutions may not reach the heights of the original, but it adds closure to the overarching narrative.', 5, 13],
    [94, 'Jurassic Park remains a timeless classic, captivating audiences with its sense of awe and danger.', 5, 14],
    [95, 'It remains a thrilling and influential work in the realm of science fiction.', 5, 15],
    [96, 'It stands as a testament to the enduring power of love and sacrifice.', 5, 16],
    [97, 'It stands as a landmark achievement in storytelling and filmmaking.', 5, 17],
    [98, 'It remains a pinnacle of artistic achievement and a cornerstone of cinematic education.', 5, 18],
    [99, 'E.T. remains a beloved family classic, transcending generations with its universal themes.', 5, 19],
    [100,'Avatar stands as a cinematic milestone, influencing the way films are made and experienced.', 5, 20],
];

const reviewsInsert = db.prepare('INSERT INTO Reviews VALUES (?, ?, ?, ?)');
Reviewsdata.forEach(data => reviewsInsert.run(data));
reviewsInsert.finalize();

db.close();

// INSERT USERSDATA
// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');

// const Usersdata = [
//     [6, 'John', 'John@gmail.com', '123456']
// ];

// const UsersInsert = db.prepare('INSERT INTO Users VALUES (?, ?, ?, ?)');
// Usersdata.forEach(data => UsersInsert.run(data));
// UsersInsert.finalize();
// db.close();

// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('MovieMindsHub_Data.sqlite');
// db.run('DELETE FROM Reviews')
// db.close();