/*
 * QOTD — "On This Day" 12-tile question bank.
 *
 * Each calendar date hides one well-known answer tied to that day — a
 * birthday, a release, or an event — spanning music, film, sport, art,
 * books, science, and pop culture. The board shows 12 numbered tiles,
 * all closed; each hides a SHORT clue. Fewer tiles opened = higher score.
 * The answer never appears inside a tile, and `explanation` decodes all
 * twelve clues once the puzzle is solved.
 *
 * Shape consumed by game.js:
 *   "MM-DD": { category, year, answers:[canonical, ...aliases],
 *              tiles:[12 short clues], explanation }
 */
window.QUESTIONS = {
  "01-08": {
    category: "Musician",
    year: 1935,
    answers: ["Elvis Presley", "Elvis", "Elvis Aaron Presley"],
    tiles: [
      "Born in Tupelo, 1935", "Discovered at Sun Records", "Home called Graceland", "'Hound Dog'",
      "'Jailhouse Rock'", "Swivelling hips", "Crowned 'the King'", "Slicked-back black hair",
      "Drafted into the army", "Later, Las Vegas residencies", "Died in 1977", "Managed by 'the Colonel'"
    ],
    explanation: "Elvis Presley was born in Tupelo, Mississippi on 8 January 1935 (1) and discovered by Sam Phillips at Sun Records in Memphis (2). His mansion was Graceland (3); his hits include 'Hound Dog' (4) and 'Jailhouse Rock' (5). His hip-shaking earned him 'Elvis the Pelvis' (6) and the title 'the King of Rock and Roll' (7), worn with his trademark slicked black hair (8). He served two years in the army in Germany (9), staged famous Las Vegas residencies from 1969 (10), and died in 1977 (11). His manager was 'Colonel' Tom Parker (12)."
  },
  "01-17": {
    category: "Athlete",
    year: 1942,
    answers: ["Muhammad Ali", "Ali", "Cassius Clay"],
    tiles: [
      "Born in Louisville, 1942", "Olympic gold, Rome 1960", "Born Cassius Clay", "'Float like a butterfly'",
      "Refused the Vietnam draft", "The Rumble in the Jungle", "The Thrilla in Manila", "Converted to Islam",
      "Beat Sonny Liston", "Lit the 1996 Olympic flame", "Later had Parkinson's", "Called himself 'the Greatest'"
    ],
    explanation: "Muhammad Ali was born in Louisville, Kentucky on 17 January 1942 (1) and won light-heavyweight gold at the 1960 Rome Olympics (2). Born Cassius Clay (3), he promised to 'float like a butterfly, sting like a bee' (4). He refused the Vietnam draft in 1967 (5), beat George Foreman in the 1974 'Rumble in the Jungle' (6) and Joe Frazier in the 1975 'Thrilla in Manila' (7). He converted to Islam and changed his name (8), first won the title by beating Sonny Liston in 1964 (9), lit the cauldron at the 1996 Atlanta Games (10), later battled Parkinson's disease (11), and always called himself 'the Greatest' (12)."
  },
  "02-12": {
    category: "Scientist",
    year: 1809,
    answers: ["Charles Darwin", "Darwin"],
    tiles: [
      "Born in 1809", "A ship named for a dog", "Galapagos finches", "A five-year voyage",
      "'On the Origin of Species'", "Natural selection", "Nearly became a parson", "Shared Lincoln's birthday",
      "Studied barnacles for years", "Once on the £10 note", "'Survival of the fittest'", "A famous long beard"
    ],
    explanation: "Charles Darwin was born on 12 February 1809 (1). He sailed aboard HMS Beagle (2), and the finches of the Galapagos (3) helped shape his thinking during the five-year voyage (4). His 1859 book was 'On the Origin of Species' (5), proposing natural selection (6). He had trained for the clergy (7) and was born the very same day as Abraham Lincoln (8). He spent eight years studying barnacles (9), later appeared on the British £10 note (10), is linked with the phrase 'survival of the fittest' (11), and is instantly recognisable by his long white beard (12)."
  },
  "02-17": {
    category: "Athlete",
    year: 1963,
    answers: ["Michael Jordan", "Jordan", "MJ"],
    tiles: [
      "Born in 1963", "Wore number 23", "Six NBA titles", "Nicknamed 'Air'",
      "Played for Chicago", "A 2020 docuseries", "Starred in 'Space Jam'", "A Nike sneaker empire",
      "A brief baseball detour", "The 'Flu Game'", "Tongue out mid-dunk", "A title-winning shot at UNC"
    ],
    explanation: "Michael Jordan was born on 17 February 1963 (1) and wore number 23 (2). He won six NBA championships (3), was nicknamed 'Air' (4), and starred for the Chicago Bulls (5). His career was retold in the 2020 docuseries 'The Last Dance' (6); he headlined the film 'Space Jam' (7) and gave his name to Nike's Air Jordan line (8). He took a brief detour into minor-league baseball in 1994 (9), played the legendary 1997 'Flu Game' (10), stuck his tongue out when driving to the basket (11), and hit the title-winning shot for North Carolina in the 1982 NCAA final (12)."
  },
  "03-14": {
    category: "Scientist",
    year: 1879,
    answers: ["Albert Einstein", "Einstein"],
    tiles: [
      "Born on Pi Day", "A patent clerk", "Miracle year, 1905", "Nobel Prize, 1921",
      "Fled Germany in 1933", "Wild white hair", "Refused a presidency", "E = mc squared",
      "Explained Brownian motion", "Tongue out for a photo", "Settled at Princeton", "Theory of relativity"
    ],
    explanation: "Albert Einstein was born on 14 March 1879, written 3/14, now Pi Day (1). He worked as a patent clerk in Bern (2), and his 1905 'miracle year' produced four landmark papers (3). He won the 1921 Nobel Prize in Physics (4), fled Nazi Germany in 1933 (5), and is famous for his wild white hair (6). He declined the offered presidency of Israel in 1952 (7). He gave us E = mc squared (8), explained Brownian motion (9), and was photographed sticking out his tongue in 1951 (10). He settled at Princeton (11) and is best known for the theory of relativity (12)."
  },
  "03-30": {
    category: "Artist",
    year: 1853,
    answers: ["Vincent van Gogh", "Van Gogh", "Vincent Van Gogh"],
    tiles: [
      "Argued with Gauguin", "Hard to pronounce", "Lost part of his left", "Popular after death",
      "Self-image", "Night sky", "Too poor to use models", "Admitted to an asylum",
      "Sold almost nothing", "Now breaks auction records", "Don McLean", "Flowers"
    ],
    explanation: "Vincent van Gogh, born 30 March 1853, fell out violently with fellow painter Paul Gauguin (1); his Dutch surname is famously hard to pronounce (2). After the quarrel he cut off part of his own left ear (3). Barely known in life, he became hugely popular after death (4). He painted dozens of studies of his own self-image (5), and his swirling 'Starry Night' captured the night sky (6). Too poor to use models (7), he kept painting even after being admitted to an asylum at Saint-Remy (8). He sold almost nothing while alive (9), yet his work now breaks auction records (10). Don McLean's song 'Vincent' (11) immortalised him, and sunflowers are his most beloved flowers (12)."
  },
  "04-15": {
    category: "Artist",
    year: 1452,
    answers: ["Leonardo da Vinci", "Leonardo", "Da Vinci", "Leonardo Da Vinci"],
    tiles: [
      "Born near a Tuscan town, 1452", "Painted the 'Mona Lisa'", "'The Last Supper'", "Drew a man in a circle",
      "Wrote in mirror script", "Sketched flying machines", "The model 'Renaissance man'", "Notebooks of inventions",
      "Worked in Florence and Milan", "The 'sfumato' technique", "Detailed anatomy drawings", "A Dan Brown thriller"
    ],
    explanation: "Leonardo da Vinci was born near the Tuscan town of Vinci on 15 April 1452 (1). He painted the 'Mona Lisa' (2) and 'The Last Supper' (3) and drew the 'Vitruvian Man', a figure in a circle and square (4). He famously wrote his notes in mirror script (5), designed flying machines (6), and is the archetypal 'Renaissance man' (7), filling notebooks with inventions (8). He worked in Florence and Milan (9), pioneered the soft 'sfumato' shading (10), made strikingly detailed anatomical drawings (11), and lends his name to Dan Brown's thriller 'The Da Vinci Code' (12)."
  },
  "04-23": {
    category: "Author",
    year: 1564,
    answers: ["William Shakespeare", "Shakespeare"],
    tiles: [
      "Stratford-upon-Avon", "Nicknamed 'the Bard'", "Born and died this day", "The Globe theatre",
      "'To be or not to be'", "Wrote 38 plays", "Married Anne Hathaway", "Coined countless words",
      "A doomed Danish prince", "Star-crossed lovers", "154 sonnets", "On the river Avon"
    ],
    explanation: "William Shakespeare came from Stratford-upon-Avon (1) and is nicknamed 'the Bard' (2); tradition gives him 23 April for both his birth (1564) and his death (1616) (3). His plays were staged at the Globe (4); 'To be or not to be' (5) is from Hamlet, one of his roughly 38 plays (6). He married Anne Hathaway (7) and coined countless English words (8). The 'doomed Danish prince' is Hamlet (9) and the 'star-crossed lovers' are Romeo and Juliet (10). He also wrote 154 sonnets (11), and his hometown sits on the river Avon (12)."
  },
  "05-25": {
    category: "Film",
    year: 1977,
    answers: ["Star Wars", "Star Wars A New Hope", "A New Hope"],
    tiles: [
      "Released in 1977", "Directed by George Lucas", "Subtitled 'A New Hope'", "A villain in black",
      "Glowing laser swords", "'May the Force be with you'", "The desert world Tatooine", "Hero Luke Skywalker",
      "Opened in only 32 cinemas", "Score by John Williams", "Droids R2-D2 and C-3PO", "'A galaxy far, far away'"
    ],
    explanation: "Star Wars opened on 25 May 1977 (1), directed by George Lucas (2) and later subtitled 'A New Hope' (3). Its villain in black is Darth Vader (4); its glowing laser swords are lightsabers (5); its blessing is 'May the Force be with you' (6). It is set partly on the desert world Tatooine (7), home of hero Luke Skywalker (8). It opened in just 32 cinemas (9), had a score by John Williams (10), featured the droids R2-D2 and C-3PO (11), and begins 'A long time ago in a galaxy far, far away' (12)."
  },
  "06-20": {
    category: "Film",
    year: 1975,
    answers: ["Jaws"],
    tiles: [
      "Released in 1975", "Directed by Spielberg", "A great white", "'A bigger boat'",
      "Set on Amity Island", "A two-note theme", "Roy Scheider stars", "Its prop was named Bruce",
      "From a Peter Benchley novel", "The first summer blockbuster", "Filmed on Martha's Vineyard", "A faulty mechanical shark"
    ],
    explanation: "Jaws was released on 20 June 1975 (1), directed by Steven Spielberg (2). Its monster is a great white shark (3), prompting the line 'You're gonna need a bigger boat' (4). It is set on Amity Island (5) and driven by John Williams' menacing two-note theme (6). Roy Scheider plays Chief Brody (7); the mechanical shark prop was nicknamed Bruce (8). It was adapted from Peter Benchley's novel (9), is often called the first summer blockbuster (10), was filmed on Martha's Vineyard (11), and the constantly malfunctioning mechanical shark (12) forced Spielberg to suggest the threat rather than show it."
  },
  "06-28": {
    category: "Entrepreneur",
    year: 1971,
    answers: ["Elon Musk", "Musk"],
    tiles: [
      "Born in Pretoria, 1971", "Co-founded PayPal", "Electric cars", "Rockets that land themselves",
      "Bought a blue-bird app", "Often the world's richest", "Dreams of colonising Mars", "A brain-chip startup",
      "The Boring Company", "Child named X Æ A-12", "Sent a sports car into orbit", "Calls himself 'Technoking'"
    ],
    explanation: "Elon Musk was born in Pretoria, South Africa on 28 June 1971 (1). He co-founded the company that became PayPal (2), leads Tesla's electric cars (3) and SpaceX's self-landing rockets (4). In 2022 he bought Twitter, the blue-bird app (5), and is frequently the world's richest person (6). He aims to colonise Mars (7), founded the brain-chip firm Neuralink (8) and tunnelling venture The Boring Company (9). He named a child X Æ A-12 (10), launched his own Tesla Roadster into orbit on a 2018 test flight (11), and took the title 'Technoking' of Tesla (12)."
  },
  "07-04": {
    category: "Event",
    year: 1776,
    answers: ["Declaration of Independence", "US Declaration of Independence", "American Declaration of Independence"],
    tiles: [
      "4 July 1776", "Thirteen colonies", "Drafted by Jefferson", "Breaking from a king",
      "'Self-evident' truths", "Fireworks every year", "Signed in Philadelphia", "Hancock's bold signature",
      "Life, liberty, happiness", "Rejected George III", "Two signers died on it", "A nation's birthday"
    ],
    explanation: "The Declaration of Independence was adopted on 4 July 1776 (1) by thirteen colonies (2). Thomas Jefferson was its principal drafter (3), announcing a break from the king (4) and holding certain truths to be 'self-evident' (5). Americans mark it with fireworks each year (6); it was adopted in Philadelphia (7), where John Hancock added his famously bold signature (8). It promises 'life, liberty and the pursuit of happiness' (9) and rejected the rule of George III (10). Signers John Adams and Thomas Jefferson both died on its 50th anniversary, 4 July 1826 (11), and the day is celebrated as the nation's birthday (12)."
  },
  "07-20": {
    category: "Event",
    year: 1969,
    answers: ["Moon Landing", "First Moon Landing", "Apollo 11 Moon Landing", "Moon landing by Apollo 11"],
    tiles: [
      "20 July 1969", "'One small step'", "Mission Apollo 11", "The Sea of Tranquility",
      "650 million watched", "A flag held out by wire", "Armstrong and Aldrin", "'The Eagle has landed'",
      "Footprints that remain", "Collins stayed in orbit", "Launched atop a Saturn V", "'A giant leap'"
    ],
    explanation: "The first Moon landing came on 20 July 1969 (1) with Neil Armstrong's 'one small step' (2) during the Apollo 11 mission (3). The lander touched down in the Sea of Tranquility (4) before an estimated 650 million TV viewers (5). The flag was held out by a wire because there is no wind (6). Armstrong and Aldrin walked on the surface (7) after radioing 'The Eagle has landed' (8); their footprints remain undisturbed (9) while Michael Collins orbited above (10). The crew launched atop a Saturn V rocket (11), and Armstrong called it 'a giant leap for mankind' (12)."
  },
  "07-31": {
    category: "Author",
    year: 1965,
    answers: ["JK Rowling", "J K Rowling", "Joanne Rowling", "Rowling"],
    tiles: [
      "Born in 1965", "Created a boy wizard", "Idea on a delayed train", "Rejected by 12 publishers",
      "Wrote in Edinburgh cafés", "A school called Hogwarts", "Pen name Robert Galbraith", "Shares her hero's birthday",
      "First book in 1997", "A lightning-bolt scar", "Published by Bloomsbury", "Once a billionaire author"
    ],
    explanation: "J.K. Rowling was born on 31 July 1965 (1) and created a boy wizard (2). The idea came to her on a delayed train from Manchester to London (3); the manuscript was rejected by about a dozen publishers (4) and much of it was written in Edinburgh cafés (5). Her wizarding school is Hogwarts (6); she writes crime novels under the pen name Robert Galbraith (7). Her hero Harry Potter shares her 31 July birthday (8). The first book appeared in 1997 (9); the hero bears a lightning-bolt scar (10). Bloomsbury published her (11), and her success briefly made her a billionaire author (12)."
  },
  "08-16": {
    category: "Musician",
    year: 1958,
    answers: ["Madonna", "Madonna Ciccone"],
    tiles: [
      "Born in 1958", "Crowned 'Queen of Pop'", "'Like a Virgin'", "'Vogue'",
      "A famous cone bra", "From Michigan", "Reinvention after reinvention", "'Material Girl'",
      "Wed Sean Penn, then Guy Ritchie", "A 1989 'Prayer' controversy", "Named after her mother", "Best-selling female artist"
    ],
    explanation: "Madonna was born on 16 August 1958 (1) and is crowned the 'Queen of Pop' (2). Her hits include 'Like a Virgin' (3) and 'Vogue' (4); Jean Paul Gaultier gave her the famous cone bra (5). She grew up in Michigan (6) and is known for constant reinvention (7). She is the 'Material Girl' (8), was married to Sean Penn and later Guy Ritchie (9), and stirred controversy with 1989's 'Like a Prayer' (10). She was named after her mother (11) and is the best-selling female recording artist of all time (12)."
  },
  "08-29": {
    category: "Musician",
    year: 1958,
    answers: ["Michael Jackson", "MJ", "Michael Joseph Jackson"],
    tiles: [
      "Born in Gary, Indiana", "Led a family group of five", "'Thriller'", "The moonwalk",
      "Crowned 'King of Pop'", "A single sequined glove", "A ranch called Neverland", "Motown beginnings",
      "'Billie Jean'", "Produced by Quincy Jones", "'Bad' and 'Off the Wall'", "Died in 2009"
    ],
    explanation: "Michael Jackson was born in Gary, Indiana on 29 August 1958 (1) and first sang in the family group the Jackson 5 (2). His 'Thriller' is the best-selling album ever (3); he popularised the moonwalk (4) and was crowned the 'King of Pop' (5). His look featured a single sequined glove (6) and his home was the Neverland ranch (7). He began at Motown (8), topped charts with 'Billie Jean' (9), worked with producer Quincy Jones (10), and released 'Bad' and 'Off the Wall' (11) before his death in 2009 (12)."
  },
  "09-05": {
    category: "Musician",
    year: 1946,
    answers: ["Freddie Mercury", "Mercury", "Farrokh Bulsara"],
    tiles: [
      "Born in Zanzibar, 1946", "Fronted a band named Queen", "'Bohemian Rhapsody'", "A four-octave voice",
      "Stole the show at Live Aid", "Born Farrokh Bulsara", "'We Are the Champions'", "Wembley, 1986",
      "A prominent overbite", "He chose the band's regal name", "Roamed the stage at the piano", "Died in 1991"
    ],
    explanation: "Freddie Mercury was born in Zanzibar on 5 September 1946 (1) and fronted the band Queen (2). He wrote 'Bohemian Rhapsody' (3) and possessed a four-octave vocal range (4). He famously stole the show at Live Aid in 1985 (5). Born Farrokh Bulsara (6), he sang 'We Are the Champions' (7) and headlined Wembley in 1986 (8). He had a prominent overbite (9), chose the band's regal name himself (10), and prowled the stage and piano as a showman (11) until his death in 1991 (12)."
  },
  "09-15": {
    category: "Author",
    year: 1890,
    answers: ["Agatha Christie", "Christie"],
    tiles: [
      "Born in 1890", "A fastidious Belgian detective", "A spinster sleuth", "'Murder on the Orient Express'",
      "'And Then There Were None'", "The play 'The Mousetrap'", "An 11-day disappearance", "From Torquay, Devon",
      "Made a Dame", "Best-selling novelist ever", "Queen of the whodunit", "Poison and country houses"
    ],
    explanation: "Agatha Christie was born on 15 September 1890 (1). Her detectives include the fastidious Belgian Hercule Poirot (2) and the spinster sleuth Miss Marple (3). Her novels include 'Murder on the Orient Express' (4) and 'And Then There Were None' (5), and her play 'The Mousetrap' is the world's longest-running (6). In 1926 she vanished for 11 days (7). She came from Torquay in Devon (8), was made a Dame (9), and is the best-selling novelist of all time (10), the 'Queen of the whodunit' (11) whose plots favour poison and country houses (12)."
  },
  "10-23": {
    category: "Athlete",
    year: 1940,
    answers: ["Pele", "Pelé", "Edson Arantes do Nascimento"],
    tiles: [
      "Born in Brazil, 1940", "Three World Cup wins", "'The beautiful game'", "Claimed over 1,000 goals",
      "Starred for Santos", "Born Edson Arantes", "Later joined the New York Cosmos", "Wore number 10",
      "A world champion at 17", "From Tres Coracoes", "Hailed 'King of Football'", "Scored in the 1970 final"
    ],
    explanation: "Pele was born in Brazil on 23 October 1940 (1) and won three World Cups, in 1958, 1962 and 1970 (2). He called football 'the beautiful game' (3) and claimed over 1,000 career goals (4). He starred for Santos (5), was born Edson Arantes do Nascimento (6), and later joined the New York Cosmos (7). He wore the number 10 shirt (8), became a world champion at just 17 (9), came from the town of Tres Coracoes (10), was hailed 'King of Football' (11), and scored in the 1970 World Cup final (12)."
  },
  "11-09": {
    category: "Event",
    year: 1989,
    answers: ["Berlin Wall", "The Berlin Wall", "Fall of the Berlin Wall"],
    tiles: [
      "9 November 1989", "Hammers and chisels", "Stood for 28 years", "Divided East and West",
      "A concrete barrier", "A Cold War symbol", "Checkpoint Charlie", "Reagan: 'tear it down'",
      "Crowds danced on top", "Germany then reunited", "Near the Brandenburg Gate", "It fell, it did not rise"
    ],
    explanation: "The Berlin Wall was opened on 9 November 1989 (1), as crowds attacked it with hammers and chisels (2). It had stood for 28 years (3), dividing the city into East and West (4) as a concrete barrier (5) and the great symbol of the Cold War (6). Its famous crossing was Checkpoint Charlie (7); two years earlier Reagan had demanded 'Tear down this wall' (8). Crowds danced on top of it (9), Germany reunified in 1990 (10), it ran past the Brandenburg Gate (11), and it is remembered for falling, not rising (12)."
  },
  "11-30": {
    category: "Author",
    year: 1835,
    answers: ["Mark Twain", "Twain", "Samuel Clemens", "Samuel Langhorne Clemens"],
    tiles: [
      "Born in 1835", "Wrote of Huckleberry Finn", "Wrote of Tom Sawyer", "Life on the Mississippi",
      "Born Samuel Clemens", "Wore a white suit", "Came and went with a comet", "From Missouri",
      "'Reports of my death are exaggerated'", "A riverboat pen name", "'Father of American literature'", "Famously quotable wit"
    ],
    explanation: "Mark Twain was born on 30 November 1835 (1). He created Huckleberry Finn (2) and Tom Sawyer (3) and wrote of life on the Mississippi (4). His real name was Samuel Clemens (5); he favoured a white suit (6) and was born and died with Halley's Comet, in 1835 and 1910 (7). He hailed from Missouri (8) and quipped that 'reports of my death are greatly exaggerated' (9). His pen name comes from a riverboat call meaning two fathoms deep (10). He is often called the 'father of American literature' (11) and remains endlessly quotable (12)."
  },
  "12-25": {
    category: "Scientist",
    year: 1642,
    answers: ["Isaac Newton", "Newton", "Sir Isaac Newton"],
    tiles: [
      "Born on Christmas", "A falling apple", "Three laws of motion", "Defined gravity",
      "Premature and tiny", "Calculus, with a rival", "A reflecting telescope", "The 'Principia'",
      "Ran the Royal Mint", "Split light with a prism", "Knighted in 1705", "By the old calendar, 1642"
    ],
    explanation: "Isaac Newton was born on Christmas Day (1); legend says a falling apple sparked his insight (2). He set out three laws of motion (3) and defined universal gravitation (4). Born premature and tiny (5), he co-invented calculus alongside his rival Leibniz (6), built the first reflecting telescope (7), and wrote the 'Principia' (8). He later ran the Royal Mint (9), split white light with a prism (10), was knighted in 1705 (11), and was born in 1642 under the old Julian calendar still used in England (12)."
  }
};
