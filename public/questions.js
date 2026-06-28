/*
 * QOTD: "On This Day" question bank, written in the open-quizzing "funda"
 * style (see the quiz-main skill): a hook, layered clues that run from
 * oblique to identifiable, a hidden "give", and a clean ask. House rules
 * applied to all player-facing text: no em dashes, dates compressed unless
 * the date is itself the clue, and the answer never appears in the body.
 *
 * Shape (consumed by game.js):
 *   "MM-DD": {
 *     category, year,
 *     prompt:  the hook + clean ask (shown as the headline),
 *     answers: [canonical, ...aliases],   // fuzzy-matched
 *     hints:   [cryptic, warmer, near-giveaway],  // revealed in order
 *     funFact: the "ohh, that's why" payoff shown after solving
 *   }
 */
window.QUESTIONS = {
  "01-15": {
    category: "Birthday",
    year: 1929,
    prompt: "Born in Atlanta in 1929, the son and grandson of Baptist preachers, this man borrowed a tactic from a half-naked lawyer in India and aimed it at segregated buses and lunch counters. Who?",
    answers: ["Martin Luther King Jr", "MLK", "Martin Luther King"],
    hints: [
      "He studied Gandhi's methods and built a movement on refusing to hit back.",
      "In 1964 he became, at 35, the youngest person then to win the Nobel Peace Prize.",
      "He told a quarter-million people on the National Mall that he had a dream."
    ],
    funFact: "The third Monday of January is a U.S. federal holiday in his name; his birthday falls in that week."
  },
  "01-27": {
    category: "Birthday",
    year: 1756,
    prompt: "A Salzburg boy was touring the courts of Europe as a keyboard marvel before most children can read, dashing off his first symphony at eight. Name the composer born on this day.",
    answers: ["Wolfgang Amadeus Mozart", "Mozart", "Wolfgang Mozart"],
    hints: [
      "He wrote over 600 works and was buried in an unmarked grave at 35.",
      "His operas include one about a philandering nobleman dragged to hell, Don Giovanni.",
      "His middle name, Amadeus, gave a 1984 Best Picture film its title."
    ],
    funFact: "His full baptismal name ran to Johannes Chrysostomus Wolfgangus Theophilus; 'Amadeus' is the Latin for the Greek 'Theophilus', meaning 'loved by God'."
  },
  "01-30": {
    category: "Historical Event",
    year: 1948,
    prompt: "On his way to evening prayer in Delhi, a frail man in a loincloth who had just helped end the British Raj was shot three times at point-blank range. Name the man killed on this day.",
    answers: ["Mahatma Gandhi", "Gandhi", "Mohandas Gandhi", "Mohandas Karamchand Gandhi"],
    hints: [
      "His weapon against an empire was the refusal to cooperate, never the fist.",
      "Years earlier he had walked to the sea to make salt in defiance of a tax.",
      "Indians call him Bapu and the Father of the Nation."
    ],
    funFact: "His assassin, Nathuram Godse, killed him less than six months after the independence he had fought for."
  },
  "02-11": {
    category: "Historical Event",
    year: 1990,
    prompt: "After 27 years in a cell, much of it breaking rocks on a windswept island, a lawyer walked out a free man and straight into negotiations to dismantle the system that jailed him. Who walked free on this day?",
    answers: ["Nelson Mandela", "Mandela"],
    hints: [
      "Prisoner 46664 emerged to help end a regime of enforced racial separation.",
      "His long imprisonment was spent largely on Robben Island.",
      "In 1994 he became South Africa's first Black president."
    ],
    funFact: "He shared the 1993 Nobel Peace Prize with F.W. de Klerk, the president who had ordered his release."
  },
  "02-12": {
    category: "Birthday",
    year: 1809,
    prompt: "A young man who nearly became a country parson sailed instead as an unpaid naturalist, and what he saw among the finches of some volcanic islands eventually unsettled the whole of biology. Name him; he was born on this day.",
    answers: ["Charles Darwin", "Darwin"],
    hints: [
      "His five-year voyage was aboard a survey brig named for a hunting dog.",
      "The Galapagos tortoises and mockingbirds gave him his great idea.",
      "He called the mechanism natural selection in On the Origin of Species."
    ],
    funFact: "Abraham Lincoln was born the very same day, 12 February 1809, an ocean apart."
  },
  "02-20": {
    category: "Historical Event",
    year: 1962,
    prompt: "A Marine pilot from Ohio climbed into a cramped capsule he had nicknamed Friendship 7 and went around the planet three times, hauling a nervous nation into the orbital age. Name the astronaut who did this on this day.",
    answers: ["John Glenn", "Glenn"],
    hints: [
      "He was the first American to orbit the Earth, not just hop above it.",
      "He was one of NASA's original Mercury Seven.",
      "At 77, decades later, he flew again on the Space Shuttle, the oldest person in space."
    ],
    funFact: "After NASA he served 24 years as a U.S. Senator; his surname is Glenn."
  },
  "03-14": {
    category: "Birthday",
    year: 1879,
    prompt: "A patent clerk who flunked nobody's idea of a model student rewrote our sense of space, time and light in his spare hours. Fittingly, he was born on a date that reads as a famous mathematical constant. Name him.",
    answers: ["Albert Einstein", "Einstein"],
    hints: [
      "His miracle year, 1905, produced four papers that each could have made a career.",
      "He won the 1921 Nobel for the photoelectric effect, not for relativity.",
      "His mass-energy equation is E = mc squared."
    ],
    funFact: "He was born on 14 March, written 3/14, the date the world now keeps as Pi Day."
  },
  "03-12": {
    category: "Historical Event",
    year: 1930,
    prompt: "To break an empire's monopoly on something as humble as salt, an old man set off on foot for the coast with a handful of followers, a walk that swelled into a movement. Name this 240-mile protest that began on this day.",
    answers: ["Salt March", "Dandi March", "Salt Satyagraha"],
    hints: [
      "The marchers' plan was simply to reach the sea and make salt, illegally.",
      "It ended 24 days later at a coastal village whose name it sometimes carries, Dandi.",
      "Gandhi led it as a defiance of the British salt tax."
    ],
    funFact: "Picking up a lump of natural sea-salt, Gandhi declared he was shaking the foundations of the British Empire."
  },
  "04-12": {
    category: "Historical Event",
    year: 1961,
    prompt: "A 27-year-old former foundry worker was strapped into a sphere barely wider than he was tall, fired into the sky, and came down 108 minutes later as the most famous human alive. Who became the first person in space on this day?",
    answers: ["Yuri Gagarin", "Gagarin"],
    hints: [
      "He made a single orbit aboard a craft called Vostok 1.",
      "He ejected and parachuted down separately from his capsule, a detail kept quiet for years.",
      "He was a Soviet pilot; his first name was Yuri."
    ],
    funFact: "He reportedly whistled a patriotic tune on the way up and said 'Poyekhali!', meaning 'Let's go!'"
  },
  "04-14": {
    category: "Historical Event",
    year: 1865,
    prompt: "Five days after the surrender that effectively ended a civil war, a president relaxing at a comedy in a Washington theatre was shot in the head by a famous actor who then leapt to the stage. Name the president struck down on this day.",
    answers: ["Abraham Lincoln", "Lincoln"],
    hints: [
      "He had steered the Union through its bloodiest war and freed the enslaved.",
      "His brief remarks at a battlefield cemetery began 'Four score and seven years ago'.",
      "His killer was the actor John Wilkes Booth; he died the next morning."
    ],
    funFact: "He was the 16th President and the first to be assassinated; he died across the street from Ford's Theatre."
  },
  "04-15": {
    category: "Historical Event",
    year: 1912,
    prompt: "Billed as practically unsinkable, the largest ship afloat brushed an iceberg late one night and was gone before dawn, taking some 1,500 souls and a gilded age's confidence with it. Name the ship that sank on this day.",
    answers: ["Titanic", "RMS Titanic"],
    hints: [
      "It went down on its very first voyage, four days out.",
      "It had set out from Southampton bound for New York.",
      "A 1997 James Cameron film named after it became a box-office leviathan."
    ],
    funFact: "It carried lifeboats for barely half those aboard, in line with the outdated rules of the day."
  },
  "04-23": {
    category: "Birthday",
    year: 1564,
    prompt: "A glover's son from a Warwickshire market town, with no university behind him, wrote the plays that would set the shape of English drama. Tradition gives him this day for both his birth and, 52 years later, his death. Name him.",
    answers: ["William Shakespeare", "Shakespeare"],
    hints: [
      "He hailed from Stratford-upon-Avon and is nicknamed the Bard of Avon.",
      "He coined or popularised hundreds of words still in daily use.",
      "His plays include Hamlet, Macbeth and Romeo and Juliet."
    ],
    funFact: "He is one of very few people popularly said to have been born and to have died on the same calendar date, 23 April."
  },
  "05-08": {
    category: "Historical Event",
    year: 1945,
    prompt: "Crowds swarmed Piccadilly and the Champs-Elysees, climbing lampposts and kissing strangers, as one half of a world war finally fell silent and a Nazi state laid down its arms. Name the celebrated day marked on this date.",
    answers: ["VE Day", "Victory in Europe Day", "V-E Day"],
    hints: [
      "It marked the acceptance of an unconditional surrender on one continent only; the Pacific war ground on.",
      "A young Princess Elizabeth slipped out incognito to join the London crowds.",
      "Its two-letter name stands for Victory in Europe."
    ],
    funFact: "Germany's surrender was signed late on 7 May, so the West marks the 8th while Russia, past midnight Moscow time, marks the 9th."
  },
  "05-25": {
    category: "Pop Culture",
    year: 1977,
    prompt: "A young director's space western, dismissed by half the studio and opening in just 32 cinemas, turned into a cultural supernova and rewrote how Hollywood makes and sells blockbusters. Name the 1977 film released on this day.",
    answers: ["Star Wars", "Star Wars A New Hope", "A New Hope"],
    hints: [
      "It opens with text crawling up the screen and a princess hiding plans inside a droid.",
      "A farm boy, a smuggler and a masked villain in black do battle near a desert world.",
      "It is set 'a long time ago in a galaxy far, far away'."
    ],
    funFact: "Released simply as that title, it was only later subtitled 'Episode IV: A New Hope' once the saga grew around it."
  },
  "05-29": {
    category: "Historical Event",
    year: 1953,
    prompt: "A New Zealand beekeeper and a Sherpa from the Khumbu valley spent fifteen minutes standing where no human had, then turned around so others would never quite know who stepped up first. Name the place they reached on this day.",
    answers: ["Everest", "Mount Everest", "Summit of Everest", "Climbing Everest"],
    hints: [
      "The two men were Edmund Hillary and Tenzing Norgay.",
      "It straddles the border of Nepal and Tibet.",
      "At 8,849 metres it is the highest point on Earth."
    ],
    funFact: "Word reached London on the eve of Queen Elizabeth II's coronation, and the press dubbed it a coronation gift."
  },
  "06-06": {
    category: "Historical Event",
    year: 1944,
    prompt: "Before dawn, gliders and paratroopers dropped behind the lines while thousands of men waded ashore into machine-gun fire across five beaches code-named Utah, Omaha, Gold, Juno and Sword. Name the operation of this day.",
    answers: ["D-Day", "Normandy Landings", "Invasion of Normandy", "D Day"],
    hints: [
      "It was the largest seaborne invasion ever attempted.",
      "The troops were landing on the coast of Normandy, in occupied France.",
      "It is remembered by a two-character name, the second of which is the same as the day's."
    ],
    funFact: "The wider campaign carried the code name Operation Overlord; the assault phase was Operation Neptune."
  },
  "06-15": {
    category: "Historical Event",
    year: 1215,
    prompt: "Cornered by his rebellious barons in a meadow by the Thames, a deeply unpopular English king pressed his seal to a document admitting that even he was not above the law. Name the charter sealed on this day.",
    answers: ["Magna Carta", "Magna Carta Libertatum"],
    hints: [
      "It was sealed at Runnymede to buy peace with the barons.",
      "Its Latin name simply means Great Charter.",
      "The king who agreed to it was the much-maligned King John."
    ],
    funFact: "Most of its clauses were soon annulled by the Pope, yet its idea outlived it and echoes in the U.S. Constitution."
  },
  "06-18": {
    category: "Historical Event",
    year: 1815,
    prompt: "On muddy Belgian farmland, a returned French emperor gambled everything on one day's fighting, only for Prussian reinforcements to arrive in the evening and finish him for good. Name the battle fought on this day.",
    answers: ["Battle of Waterloo", "Waterloo"],
    hints: [
      "The winning coalition was led by the Duke of Wellington alongside Blucher's Prussians.",
      "The loser had escaped from exile on Elba just months before.",
      "The battle's name is now shorthand for anyone's final, total defeat."
    ],
    funFact: "Napoleon was exiled to remote Saint Helena in the South Atlantic, where he died in 1821."
  },
  "06-28": {
    category: "Historical Event",
    year: 1914,
    prompt: "After his driver took a wrong turn and stalled the car, an heir to a tottering empire and his wife Sophie were shot dead on a Sarajevo street corner by a teenage nationalist, lighting a fuse under all of Europe. Name the man killed on this day.",
    answers: ["Archduke Franz Ferdinand", "Franz Ferdinand", "Franz Ferdinand of Austria"],
    hints: [
      "His death set off a chain of ultimatums that became the First World War.",
      "His assassin, Gavrilo Princip, belonged to a Serbian group called the Black Hand.",
      "He was the heir to the throne of Austria-Hungary."
    ],
    funFact: "Exactly five years on, on 28 June 1919, the Treaty of Versailles was signed, formally ending the war his murder helped start."
  },
  "07-04": {
    category: "Historical Event",
    year: 1776,
    prompt: "Thirteen quarrelsome colonies put their names to a single sheet announcing they were done with their king and would govern themselves, a date that became a nation's birthday. Name the document adopted on this day.",
    answers: ["Declaration of Independence", "US Declaration of Independence", "American Declaration of Independence"],
    hints: [
      "Its soaring middle line holds these truths to be self-evident.",
      "Its principal author was Thomas Jefferson.",
      "Americans light fireworks for it every Fourth of July."
    ],
    funFact: "Both Jefferson and John Adams died on 4 July 1826, the 50th anniversary, within hours of each other."
  },
  "07-14": {
    category: "Historical Event",
    year: 1789,
    prompt: "Hunting for gunpowder, a Paris mob turned on a hated royal fortress and prison, and its fall became the thunderclap that a revolution would date itself from. Name the fortress stormed on this day.",
    answers: ["Bastille", "Storming of the Bastille"],
    hints: [
      "It held only seven prisoners that day, but it stood for royal tyranny.",
      "Its capture is the spark-point of the French Revolution.",
      "France's national day, 14 July, is named for it."
    ],
    funFact: "The fortress was demolished within months; its stones were sold off as revolutionary souvenirs."
  },
  "07-16": {
    category: "Science",
    year: 1969,
    prompt: "Three men sat atop 3,000 tonnes of explosive fuel on a Florida launch pad and rode the most powerful rocket ever flown toward another world. Name the mission that lifted off on this day.",
    answers: ["Apollo 11", "Apollo Eleven"],
    hints: [
      "Its crew were Neil Armstrong, Buzz Aldrin and Michael Collins.",
      "It was boosted by the towering Saturn V.",
      "Four days later its lander, Eagle, set down on the Moon."
    ],
    funFact: "Collins orbited alone in the command module while the other two became the first to walk on the Moon."
  },
  "07-20": {
    category: "Science",
    year: 1969,
    prompt: "Some 650 million people held their breath at their televisions as a ghostly grey figure backed down a ladder and pressed a boot into ground no living thing had ever touched. Name the first achieved on this day.",
    answers: ["Moon Landing", "First Moon Landing", "Apollo 11 Moon Landing", "Moon landing by Apollo 11"],
    hints: [
      "The crew had flown there aboard Apollo 11.",
      "The first man down spoke of one small step for man.",
      "He was Neil Armstrong, stepping onto the Moon."
    ],
    funFact: "Buzz Aldrin called the lunar surface 'magnificent desolation' as he joined Armstrong outside."
  },
  "08-06": {
    category: "Historical Event",
    year: 1945,
    prompt: "At 8:15 one morning a single bomber dropped one weapon, and in a heartbeat a Japanese city of a quarter-million people was flattened by a new kind of fire. Name the city struck on this day.",
    answers: ["Hiroshima"],
    hints: [
      "It was the first city ever destroyed by an atomic bomb.",
      "The bomb dropped on it was nicknamed Little Boy.",
      "Three days later a second bomb fell on Nagasaki."
    ],
    funFact: "Japan announced its surrender on 15 August 1945, days after the two bombings."
  },
  "08-15": {
    category: "Historical Event",
    year: 1947,
    prompt: "At the stroke of the midnight hour, while a new prime minister spoke of a tryst with destiny, a vast nation woke to freedom and, in the same breath, to a wrenching partition. Name the country that became independent on this day.",
    answers: ["India", "Republic of India"],
    hints: [
      "Its first prime minister was Jawaharlal Nehru.",
      "Freedom came with a violent split that created a second new nation.",
      "That second nation, carved off at the same moment, was Pakistan."
    ],
    funFact: "Nehru's 'Tryst with Destiny' address is regarded as one of the great speeches of the 20th century."
  },
  "08-28": {
    category: "Historical Event",
    year: 1963,
    prompt: "Before a quarter-million people massed at a memorial to the president who freed the enslaved, a preacher set aside his script when a singer urged him on, and improvised the most famous passage in American oratory. Name the speech given on this day.",
    answers: ["I Have a Dream", "I Have a Dream speech"],
    hints: [
      "It was delivered from the steps of the Lincoln Memorial during the March on Washington.",
      "The speaker was Martin Luther King Jr.",
      "Its refrain repeats four words beginning 'I have a...'."
    ],
    funFact: "Gospel singer Mahalia Jackson called out 'Tell them about the dream, Martin!', and King left his prepared text behind."
  },
  "09-02": {
    category: "Historical Event",
    year: 1945,
    prompt: "On the deck of a battleship anchored in Tokyo Bay, officials in top hats and uniforms signed a few pages and brought the deadliest conflict in human history to its formal close. Name the war that ended on this day.",
    answers: ["World War II", "WWII", "Second World War", "World War 2"],
    hints: [
      "The surrender was signed aboard the USS Missouri.",
      "It marked the formal capitulation of Japan.",
      "It was the second war to engulf nearly the whole globe."
    ],
    funFact: "The day is remembered as V-J Day, for Victory over Japan."
  },
  "09-11": {
    category: "Historical Event",
    year: 2001,
    prompt: "On a clear blue Tuesday morning, two hijacked airliners were flown into a pair of 110-storey towers, and within two hours the skyline of a great American city had changed forever. Name the city attacked on this day.",
    answers: ["New York", "New York City", "NYC"],
    hints: [
      "The towers struck were the twin pillars of the World Trade Center.",
      "It is the largest city in the United States.",
      "It shares its name with the state that surrounds it."
    ],
    funFact: "Two reflecting pools, set in the towers' exact footprints, now form the memorial on the site."
  },
  "10-12": {
    category: "Historical Event",
    year: 1492,
    prompt: "A Genoese navigator who had badly underestimated the size of the planet made landfall on a Caribbean island, convinced to his dying day that he had reached the edge of Asia. Name the explorer who arrived on this day.",
    answers: ["Christopher Columbus", "Columbus", "Cristoforo Colombo"],
    hints: [
      "He sailed under the flag of Spain in search of a westward route to the Indies.",
      "His three ships were the Nina, the Pinta and the Santa Maria.",
      "A schoolroom rhyme has him sailing the ocean blue in 1492."
    ],
    funFact: "He never set foot on the North American mainland across any of his four voyages."
  },
  "10-14": {
    category: "Science",
    year: 1947,
    prompt: "With two ribs cracked from a fall off a horse, a test pilot wedged himself into a bullet-shaped rocket plane and flew faster than the thing we usually only hear. Name the barrier he broke on this day.",
    answers: ["Sound Barrier", "Speed of Sound", "Supersonic"],
    hints: [
      "He did it in the experimental Bell X-1, dropped from the belly of a bomber.",
      "Crossing it produces the crack of a sonic boom.",
      "It is the threshold known as Mach 1."
    ],
    funFact: "The pilot, Chuck Yeager, named his X-1 'Glamorous Glennis' after his wife."
  },
  "10-29": {
    category: "Historical Event",
    year: 1929,
    prompt: "After a giddy decade of easy credit and soaring share prices, panic selling on a single autumn Tuesday wiped out fortunes and tipped the world toward a long, grinding slump. Name the financial crash of this day.",
    answers: ["Wall Street Crash", "Stock Market Crash", "Black Tuesday", "Wall Street Crash of 1929"],
    hints: [
      "Some 16 million shares changed hands in a frenzy of dumping.",
      "It struck the New York Stock Exchange on a thoroughfare named for a former barrier.",
      "That street is Wall Street, and the day is remembered as Black Tuesday."
    ],
    funFact: "It opened the curtain on the Great Depression of the 1930s."
  },
  "10-31": {
    category: "Historical Event",
    year: 1517,
    prompt: "A German monk and professor, furious at the selling of forgiveness for cash, is said to have walked to a castle church and posted 95 debating points on its door. Name the monk whose act is dated to this day.",
    answers: ["Martin Luther", "Luther"],
    hints: [
      "His protest is the traditional starting gun of the Protestant Reformation.",
      "He nailed his 95 Theses to the church door at Wittenberg.",
      "He shares his name with a 20th-century American civil rights leader."
    ],
    funFact: "He later translated the Bible into everyday German, shaping the modern language itself."
  },
  "11-09": {
    category: "Historical Event",
    year: 1989,
    prompt: "A confused official misread a memo at a press conference, said the new travel rules applied immediately, and within hours jubilant crowds were dancing atop a concrete barrier with hammers in hand. Name the barrier that fell on this day.",
    answers: ["Berlin Wall", "The Berlin Wall"],
    hints: [
      "For 28 years it had split a single German city into East and West.",
      "Its fall is the great symbol of the end of the Cold War.",
      "The city it divided was Berlin."
    ],
    funFact: "Germany was formally reunified less than a year later, on 3 October 1990."
  },
  "11-11": {
    category: "Historical Event",
    year: 1918,
    prompt: "The guns on the Western Front fell silent at a time chosen for its tidy symmetry, the eleventh hour of the eleventh day of the eleventh month. Name the war whose fighting ended on this day.",
    answers: ["World War I", "WWI", "First World War", "World War 1", "The Great War"],
    hints: [
      "The ceasefire that ended it is called the Armistice.",
      "It was the first conflict ever called a world war, and was known as the Great War.",
      "It is remembered each year with two minutes of silence and a red flower."
    ],
    funFact: "The red poppy of Flanders fields became its enduring emblem of remembrance."
  },
  "11-19": {
    category: "Historical Event",
    year: 1863,
    prompt: "Invited almost as an afterthought, a president rose after a two-hour oration, spoke for barely two minutes, and delivered 272 words that outlived everything else said that day. Name the address given on this day.",
    answers: ["Gettysburg Address", "The Gettysburg Address"],
    hints: [
      "It was delivered to dedicate a cemetery on a Civil War battlefield.",
      "Its opening reaches back 'Four score and seven years ago'.",
      "The speaker was Abraham Lincoln, at Gettysburg."
    ],
    funFact: "The day's main speaker, Edward Everett, later wrote to Lincoln that he wished he had come as near the point in two hours as Lincoln had in two minutes."
  },
  "11-22": {
    category: "Historical Event",
    year: 1963,
    prompt: "Riding through Dallas in an open-top limousine, waving to crowds beside his wife in a pink suit, a young president was struck by rifle fire from a book depository window. Name the president assassinated on this day.",
    answers: ["John F Kennedy", "JFK", "John Kennedy", "John Fitzgerald Kennedy", "Kennedy"],
    hints: [
      "He was the youngest man ever elected to the office he held.",
      "He had faced down the Soviets over missiles in Cuba a year earlier.",
      "His initials are J.F.K."
    ],
    funFact: "He had earlier set his nation the goal of landing a man on the Moon before the decade was out."
  },
  "12-07": {
    category: "Historical Event",
    year: 1941,
    prompt: "On a quiet Sunday morning, carrier planes swept in low over a Hawaiian harbour, crippling a fleet at anchor and dragging a reluctant nation into a world war. Name the attack of this day.",
    answers: ["Pearl Harbor", "Attack on Pearl Harbor", "Bombing of Pearl Harbor"],
    hints: [
      "The aircraft were Japanese, striking before any declaration of war.",
      "The naval base lay on the island of Oahu.",
      "A president called it a date which will live in infamy."
    ],
    funFact: "The United States declared war on Japan the very next day."
  },
  "12-17": {
    category: "Science",
    year: 1903,
    prompt: "Two bicycle-shop brothers from Ohio lugged a flimsy machine of spruce and canvas to a windy strip of dunes and, for twelve seconds, lifted humanity off the ground under its own power. Name the brothers behind this first on this day.",
    answers: ["Wright Brothers", "The Wright Brothers", "Wright"],
    hints: [
      "It happened on the sands of Kitty Hawk, North Carolina.",
      "Their first hop covered just 120 feet, shorter than a modern airliner.",
      "Their first names were Orville and Wilbur."
    ],
    funFact: "Only a handful of people witnessed the flight, and most newspapers ignored it at first."
  },
  "12-25": {
    category: "Birthday",
    year: 1642,
    prompt: "Born premature and small enough, his mother said, to fit in a quart mug, this Englishman grew up to lay down the laws of motion and gravity. By the calendar then used in England, he was born on this day. Name him.",
    answers: ["Isaac Newton", "Newton", "Sir Isaac Newton"],
    hints: [
      "Legend has a falling apple sparking his great insight.",
      "He set out three laws of motion and a law of universal gravitation.",
      "He shared the calculus with Leibniz and built the first reflecting telescope."
    ],
    funFact: "He was born on Christmas Day 1642 under the old Julian calendar; by the modern calendar the date shifts into January 1643."
  }
};
