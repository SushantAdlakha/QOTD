/*
 * QOTD — "On This Day" question bank.
 *
 * Each entry is keyed by a "MM-DD" date string and describes a single
 * historical event, person, or milestone tied to that calendar date.
 *
 * hints[0] is the TOUGHEST (most cryptic, fewest specifics) and hints[2]
 * is the EASIEST (nearly gives it away). Players reveal them in order.
 *
 * `answers` is a list of accepted answers. The first one is the canonical
 * display answer; the rest are alternate spellings / shorter forms that
 * should also be accepted. Matching is fuzzy (case/punctuation-insensitive).
 */
window.QUESTIONS = {
  "01-15": {
    category: "Birthday",
    year: 1929,
    prompt: "Which American civil rights leader was born on this day?",
    answers: ["Martin Luther King Jr", "MLK", "Martin Luther King"],
    hints: [
      "A Baptist minister who became the face of a non-violent movement.",
      "He won the Nobel Peace Prize in 1964 at just 35 years old.",
      "He delivered the 'I Have a Dream' speech in 1963."
    ],
    funFact: "A U.S. federal holiday honoring him is observed on the third Monday of January."
  },
  "01-27": {
    category: "Birthday",
    year: 1756,
    prompt: "Which musical prodigy was born in Salzburg on this day?",
    answers: ["Wolfgang Amadeus Mozart", "Mozart", "Wolfgang Mozart"],
    hints: [
      "He composed his first symphony before he was nine years old.",
      "An 18th-century Austrian composer of operas, symphonies and concertos.",
      "His works include 'The Magic Flute' and 'Eine kleine Nachtmusik'."
    ],
    funFact: "He wrote more than 600 works before his death at age 35."
  },
  "01-30": {
    category: "Historical Event",
    year: 1948,
    prompt: "Which leader of India's independence movement was assassinated on this day?",
    answers: ["Mahatma Gandhi", "Gandhi", "Mohandas Gandhi", "Mohandas Karamchand Gandhi"],
    hints: [
      "He championed non-violent civil disobedience against an empire.",
      "He led the 1930 Salt March in protest of a colonial tax.",
      "Indians call him 'Bapu' and the 'Father of the Nation'."
    ],
    funFact: "He was shot in New Delhi by Nathuram Godse, less than six months after India gained independence."
  },
  "02-11": {
    category: "Historical Event",
    year: 1990,
    prompt: "Which political prisoner walked free after 27 years on this day?",
    answers: ["Nelson Mandela", "Mandela"],
    hints: [
      "He emerged from prison to negotiate the end of a system of racial segregation.",
      "He had spent much of his sentence on Robben Island.",
      "In 1994 he became South Africa's first Black president."
    ],
    funFact: "He shared the 1993 Nobel Peace Prize with F.W. de Klerk."
  },
  "02-12": {
    category: "Birthday",
    year: 1809,
    prompt: "Which naturalist, who reshaped how we understand life, was born on this day?",
    answers: ["Charles Darwin", "Darwin"],
    hints: [
      "His voyage aboard a survey ship took him to a famous group of islands.",
      "He studied finches and tortoises in the Galápagos.",
      "He wrote 'On the Origin of Species' and proposed evolution by natural selection."
    ],
    funFact: "Abraham Lincoln was born on the exact same day — February 12, 1809."
  },
  "02-20": {
    category: "Historical Event",
    year: 1962,
    prompt: "Which astronaut became the first American to orbit the Earth on this day?",
    answers: ["John Glenn", "Glenn"],
    hints: [
      "He circled the planet three times in a capsule called Friendship 7.",
      "He was one of NASA's original 'Mercury Seven' astronauts.",
      "In 1998, aged 77, he returned to space aboard the Space Shuttle."
    ],
    funFact: "He later served 24 years as a U.S. Senator from Ohio."
  },
  "03-14": {
    category: "Birthday",
    year: 1879,
    prompt: "Which physicist, born on this 'Pi Day', forever changed our view of space and time?",
    answers: ["Albert Einstein", "Einstein"],
    hints: [
      "He worked as a patent clerk while developing world-changing theories.",
      "He won the 1921 Nobel Prize — for the photoelectric effect, not relativity.",
      "His most famous equation is E = mc²."
    ],
    funFact: "He was born on March 14 (3/14), the date now celebrated as Pi Day."
  },
  "03-12": {
    category: "Historical Event",
    year: 1930,
    prompt: "Which famous act of protest against a salt tax began on this day?",
    answers: ["Salt March", "Dandi March", "Salt Satyagraha"],
    hints: [
      "A 240-mile walk to the sea led by a man in a simple loincloth.",
      "Marchers gathered seawater to defy a colonial monopoly.",
      "Gandhi led this protest to the coastal village of Dandi."
    ],
    funFact: "The 24-day march galvanized worldwide attention for Indian independence."
  },
  "04-12": {
    category: "Historical Event",
    year: 1961,
    prompt: "Who became the first human to journey into outer space on this day?",
    answers: ["Yuri Gagarin", "Gagarin"],
    hints: [
      "A Soviet pilot who orbited the Earth a single time.",
      "His spacecraft was called Vostok 1.",
      "His first name was Yuri; he was Russian."
    ],
    funFact: "His flight lasted 108 minutes and made him an instant global celebrity."
  },
  "04-14": {
    category: "Historical Event",
    year: 1865,
    prompt: "Which U.S. president was shot at Ford's Theatre on this day?",
    answers: ["Abraham Lincoln", "Lincoln"],
    hints: [
      "He led his nation through its bloodiest internal conflict.",
      "He delivered the Gettysburg Address and issued the Emancipation Proclamation.",
      "He was shot by John Wilkes Booth and died the next morning."
    ],
    funFact: "He was the 16th President and the first to be assassinated."
  },
  "04-15": {
    category: "Historical Event",
    year: 1912,
    prompt: "Which 'unsinkable' ship sank in the North Atlantic on this day?",
    answers: ["Titanic", "RMS Titanic"],
    hints: [
      "It struck an iceberg on its maiden voyage.",
      "It was traveling from Southampton toward New York City.",
      "A 1997 James Cameron film made its story a blockbuster."
    ],
    funFact: "More than 1,500 of the roughly 2,224 people aboard died in the disaster."
  },
  "04-23": {
    category: "Birthday",
    year: 1564,
    prompt: "Which English playwright is traditionally said to have been born — and died — on this day?",
    answers: ["William Shakespeare", "Shakespeare"],
    hints: [
      "He hailed from Stratford-upon-Avon.",
      "He is nicknamed 'The Bard of Avon'.",
      "He wrote 'Hamlet', 'Romeo and Juliet' and 'Macbeth'."
    ],
    funFact: "He is believed to have both been born (1564) and died (1616) on April 23."
  },
  "05-08": {
    category: "Historical Event",
    year: 1945,
    prompt: "Which celebrated end-of-war day in Europe is marked on this day?",
    answers: ["VE Day", "Victory in Europe Day", "V-E Day"],
    hints: [
      "Crowds flooded the streets of London and Paris in jubilation.",
      "It marked the surrender of a Nazi regime.",
      "Its name is abbreviated to two letters meaning 'Victory in Europe'."
    ],
    funFact: "It marked the formal acceptance of Germany's unconditional surrender in World War II."
  },
  "05-25": {
    category: "Pop Culture",
    year: 1977,
    prompt: "Which space-opera film premiered on this day, changing cinema forever?",
    answers: ["Star Wars", "Star Wars A New Hope", "A New Hope"],
    hints: [
      "It opened in only 32 theaters but became a phenomenon.",
      "It introduced a farm boy, a princess, and a masked villain.",
      "Its tagline involved a galaxy 'far, far away'."
    ],
    funFact: "Originally just titled 'Star Wars', it was later subtitled 'Episode IV – A New Hope'."
  },
  "05-29": {
    category: "Historical Event",
    year: 1953,
    prompt: "What was first achieved by Edmund Hillary and Tenzing Norgay on this day?",
    answers: ["Everest", "Mount Everest", "Summit of Everest", "Climbing Everest"],
    hints: [
      "Two men reached a point higher than any other on land.",
      "Their goal sits on the border of Nepal and Tibet.",
      "It is the tallest mountain on Earth at 8,849 meters."
    ],
    funFact: "News of the climb reached London just in time for Queen Elizabeth II's coronation."
  },
  "06-06": {
    category: "Historical Event",
    year: 1944,
    prompt: "Which massive WWII amphibious invasion took place on this day?",
    answers: ["D-Day", "Normandy Landings", "Invasion of Normandy", "D Day"],
    hints: [
      "Thousands of troops stormed beaches code-named Utah, Omaha, Gold, Juno and Sword.",
      "It was the largest seaborne invasion in history.",
      "Allied forces landed on the coast of Normandy, France."
    ],
    funFact: "The operation's code name was 'Overlord'."
  },
  "06-15": {
    category: "Historical Event",
    year: 1215,
    prompt: "Which famous charter limiting royal power was sealed on this day?",
    answers: ["Magna Carta", "Magna Carta Libertatum"],
    hints: [
      "An English king was forced to seal it by rebellious barons at Runnymede.",
      "Its Latin name means 'Great Charter'.",
      "King John agreed to it in the year 1215."
    ],
    funFact: "It influenced constitutional law worldwide, including the U.S. Constitution."
  },
  "06-18": {
    category: "Historical Event",
    year: 1815,
    prompt: "Which decisive battle ended Napoleon's rule on this day?",
    answers: ["Battle of Waterloo", "Waterloo"],
    hints: [
      "A French emperor met his final defeat near a village in present-day Belgium.",
      "The Duke of Wellington and Prussian forces led the opposing coalition.",
      "Its name is now a synonym for a final, crushing defeat."
    ],
    funFact: "Napoleon was exiled to the remote island of Saint Helena, where he died in 1821."
  },
  "06-28": {
    category: "Historical Event",
    year: 1914,
    prompt: "Whose assassination in Sarajevo on this day helped ignite World War I?",
    answers: ["Archduke Franz Ferdinand", "Franz Ferdinand", "Franz Ferdinand of Austria"],
    hints: [
      "An heir to a European throne was shot alongside his wife Sophie.",
      "His killer, Gavrilo Princip, belonged to a Serbian nationalist group.",
      "He was the heir to the Austro-Hungarian Empire."
    ],
    funFact: "Exactly five years later, on June 28, 1919, the Treaty of Versailles formally ended the war his death helped start."
  },
  "07-04": {
    category: "Historical Event",
    year: 1776,
    prompt: "Which founding document was adopted on this day?",
    answers: ["Declaration of Independence", "US Declaration of Independence", "American Declaration of Independence"],
    hints: [
      "Thirteen colonies announced they were breaking from a king.",
      "Thomas Jefferson was its principal author.",
      "It is celebrated every year in the U.S. as Independence Day."
    ],
    funFact: "Both John Adams and Thomas Jefferson died on July 4, 1826 — its 50th anniversary."
  },
  "07-14": {
    category: "Historical Event",
    year: 1789,
    prompt: "Which fortress was stormed on this day, sparking a revolution?",
    answers: ["Bastille", "Storming of the Bastille"],
    hints: [
      "A Paris prison-fortress was seized by an angry crowd.",
      "It became the spark of the French Revolution.",
      "France's national day is named after this event."
    ],
    funFact: "Bastille Day is celebrated every July 14 as France's national holiday."
  },
  "07-16": {
    category: "Science",
    year: 1969,
    prompt: "Which historic mission launched from Florida on this day, bound for the Moon?",
    answers: ["Apollo 11", "Apollo Eleven"],
    hints: [
      "Three astronauts rode a Saturn V rocket skyward.",
      "Its crew included Neil Armstrong, Buzz Aldrin and Michael Collins.",
      "Four days later its lander touched down on the lunar surface."
    ],
    funFact: "Michael Collins orbited alone in the command module while the others walked on the Moon."
  },
  "07-20": {
    category: "Science",
    year: 1969,
    prompt: "What momentous 'first' happened on this day?",
    answers: ["Moon Landing", "First Moon Landing", "Apollo 11 Moon Landing", "Moon landing by Apollo 11"],
    hints: [
      "A human being set foot somewhere no human had before.",
      "'That's one small step for man...' was spoken live to millions.",
      "Neil Armstrong stepped onto the Moon."
    ],
    funFact: "An estimated 650 million people watched the broadcast live around the world."
  },
  "08-06": {
    category: "Historical Event",
    year: 1945,
    prompt: "Which city became the first ever struck by an atomic bomb on this day?",
    answers: ["Hiroshima"],
    hints: [
      "A single weapon devastated a Japanese city near the end of WWII.",
      "The bomb that hit it was nicknamed 'Little Boy'.",
      "A second bomb fell on Nagasaki three days later."
    ],
    funFact: "Japan announced its surrender on August 15, 1945, days after the bombings."
  },
  "08-15": {
    category: "Historical Event",
    year: 1947,
    prompt: "Which populous nation gained independence from Britain on this day?",
    answers: ["India", "Republic of India"],
    hints: [
      "At the stroke of midnight, a 'tryst with destiny' was declared.",
      "Jawaharlal Nehru became its first prime minister.",
      "Its partition also created the new nation of Pakistan."
    ],
    funFact: "Nehru's 'Tryst with Destiny' speech is one of the most famous of the 20th century."
  },
  "08-28": {
    category: "Historical Event",
    year: 1963,
    prompt: "Which landmark speech was delivered at the Lincoln Memorial on this day?",
    answers: ["I Have a Dream", "I Have a Dream speech"],
    hints: [
      "It was given before a quarter-million people at a march on Washington.",
      "Martin Luther King Jr. was the speaker.",
      "Its most famous line begins 'I have a dream...'"
    ],
    funFact: "King largely improvised the iconic 'dream' passage, departing from his prepared text."
  },
  "09-02": {
    category: "Historical Event",
    year: 1945,
    prompt: "Which global conflict formally ended on this day with a surrender aboard the USS Missouri?",
    answers: ["World War II", "WWII", "Second World War", "World War 2"],
    hints: [
      "Representatives signed surrender documents on a battleship in Tokyo Bay.",
      "It marked the formal capitulation of Japan.",
      "It was the second war to engulf nearly the entire globe."
    ],
    funFact: "The day is known as V-J Day, for 'Victory over Japan'."
  },
  "09-11": {
    category: "Historical Event",
    year: 2001,
    prompt: "On this solemn day, coordinated attacks struck which American city's Twin Towers?",
    answers: ["New York", "New York City", "NYC"],
    hints: [
      "Two hijacked planes brought down a pair of iconic skyscrapers.",
      "The targeted complex was the World Trade Center.",
      "It is the largest city in the state of the same name."
    ],
    funFact: "A memorial with two reflecting pools now stands where the towers once were."
  },
  "10-12": {
    category: "Historical Event",
    year: 1492,
    prompt: "Who reached the Americas on this day, believing he'd found a route to Asia?",
    answers: ["Christopher Columbus", "Columbus", "Cristoforo Colombo"],
    hints: [
      "An Italian navigator sailing under the Spanish crown made landfall in the Caribbean.",
      "His three ships were the Niña, the Pinta and the Santa María.",
      "His first and last names share the same initial sound; he 'sailed the ocean blue' in 1492."
    ],
    funFact: "He never set foot on the North American mainland during his four voyages."
  },
  "10-14": {
    category: "Science",
    year: 1947,
    prompt: "Which barrier did pilot Chuck Yeager break for the first time on this day?",
    answers: ["Sound Barrier", "Speed of Sound", "Supersonic"],
    hints: [
      "A test pilot flew faster than something we usually only hear.",
      "He did it in an experimental craft named the Bell X-1.",
      "He exceeded Mach 1 — the speed of sound."
    ],
    funFact: "Yeager nicknamed his X-1 'Glamorous Glennis' after his wife."
  },
  "10-29": {
    category: "Historical Event",
    year: 1929,
    prompt: "Which financial catastrophe, 'Black Tuesday', struck on this day?",
    answers: ["Wall Street Crash", "Stock Market Crash", "Black Tuesday", "Wall Street Crash of 1929"],
    hints: [
      "Panic selling wiped out fortunes in a single trading session.",
      "It helped trigger a decade-long economic depression.",
      "It happened on the New York Stock Exchange, on 'Wall Street'."
    ],
    funFact: "It marked the start of the Great Depression of the 1930s."
  },
  "10-31": {
    category: "Historical Event",
    year: 1517,
    prompt: "Which monk's act on this day is said to have sparked the Protestant Reformation?",
    answers: ["Martin Luther", "Luther"],
    hints: [
      "A German theologian challenged the practices of the Catholic Church.",
      "He is said to have nailed 95 Theses to a church door in Wittenberg.",
      "He shares his name with a 20th-century American civil rights leader."
    ],
    funFact: "He later translated the Bible into German, shaping the modern language."
  },
  "11-09": {
    category: "Historical Event",
    year: 1989,
    prompt: "Which barrier began to fall on this day, reuniting a divided city?",
    answers: ["Berlin Wall", "The Berlin Wall"],
    hints: [
      "Crowds with hammers and chisels chipped away at a concrete divide.",
      "It had separated a German city into East and West for 28 years.",
      "Its fall symbolized the end of the Cold War."
    ],
    funFact: "Germany was officially reunified less than a year later, on October 3, 1990."
  },
  "11-11": {
    category: "Historical Event",
    year: 1918,
    prompt: "Which war's fighting ended on this day 'at the 11th hour of the 11th day of the 11th month'?",
    answers: ["World War I", "WWI", "First World War", "World War 1", "The Great War"],
    hints: [
      "An armistice silenced the guns on the Western Front.",
      "It is now commemorated as Armistice or Remembrance Day.",
      "It was the first war to be called a 'world' war — the Great War."
    ],
    funFact: "The red poppy became its enduring symbol of remembrance."
  },
  "11-19": {
    category: "Historical Event",
    year: 1863,
    prompt: "Which brief but immortal speech was delivered on this day?",
    answers: ["Gettysburg Address", "The Gettysburg Address"],
    hints: [
      "It lasted barely two minutes and contained just 272 words.",
      "It begins 'Four score and seven years ago...'",
      "Abraham Lincoln delivered it at a Civil War battlefield cemetery."
    ],
    funFact: "The featured speaker that day spoke for two hours; almost no one remembers his name."
  },
  "11-22": {
    category: "Historical Event",
    year: 1963,
    prompt: "Which U.S. president was assassinated in Dallas on this day?",
    answers: ["John F Kennedy", "JFK", "John Kennedy", "John Fitzgerald Kennedy", "Kennedy"],
    hints: [
      "He was shot while riding in an open-top motorcade.",
      "He was the youngest man ever elected U.S. president.",
      "His initials are J.F.K."
    ],
    funFact: "He had earlier challenged the nation to land a man on the Moon before the decade was out."
  },
  "12-07": {
    category: "Historical Event",
    year: 1941,
    prompt: "Which surprise attack on this day drew the U.S. into World War II?",
    answers: ["Pearl Harbor", "Attack on Pearl Harbor", "Bombing of Pearl Harbor"],
    hints: [
      "Japanese planes struck a U.S. naval base before dawn.",
      "The base was on the Hawaiian island of Oahu.",
      "President Roosevelt called it 'a date which will live in infamy'."
    ],
    funFact: "The U.S. declared war on Japan the very next day."
  },
  "12-17": {
    category: "Science",
    year: 1903,
    prompt: "Which brothers achieved the first powered airplane flight on this day?",
    answers: ["Wright Brothers", "The Wright Brothers", "Wright"],
    hints: [
      "Two bicycle-shop owners flew a fragile machine on a windy beach.",
      "It happened at Kitty Hawk, North Carolina.",
      "Their surname is shared by the brothers Orville and Wilbur."
    ],
    funFact: "Their first flight lasted just 12 seconds and covered 120 feet."
  },
  "12-25": {
    category: "Birthday",
    year: 1642,
    prompt: "Which English scientist who defined gravity was born on this day (old calendar)?",
    answers: ["Isaac Newton", "Newton", "Sir Isaac Newton"],
    hints: [
      "Legend says a falling fruit inspired his greatest insight.",
      "He formulated three laws of motion.",
      "An apple supposedly fell as he pondered gravity."
    ],
    funFact: "He was born on Christmas Day 1642 under the old Julian calendar still used in England."
  }
};
