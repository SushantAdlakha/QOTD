/*
 * QOTD — "On This Day" 12-tile question bank.
 *
 * Each calendar date hides one answer (a person, event, or thing tied to
 * that day). The board shows 12 numbered tiles, all closed. Players open
 * tiles one at a time; each tile reveals a SHORT clue (a few words, in the
 * spirit of the TV "tip of the tongue" grids). Fewer tiles opened = higher
 * score. The answer never appears in a tile.
 *
 * Shape consumed by game.js:
 *   "MM-DD": {
 *     category, year,
 *     answers: [canonical, ...aliases],   // fuzzy-matched
 *     tiles:   [12 short clue strings],    // positions 1..12
 *     explanation: shown after solving
 *   }
 */
window.QUESTIONS = {
  "01-15": {
    category: "Person",
    year: 1929,
    answers: ["Martin Luther King Jr", "MLK", "Martin Luther King", "Martin Luther King Junior"],
    tiles: [
      "Born in Atlanta", "A Baptist preacher", "Studied Gandhi", "Nobel Peace Prize, 1964",
      "A march on Washington", "Birmingham jail", "Montgomery bus boycott", "Selma to Montgomery",
      "Shot in Memphis", "A national holiday", "Honoured each January", "Said he had a dream"
    ],
    explanation: "Martin Luther King Jr., born 15 January 1929, led the American civil-rights movement with Gandhian non-violence and delivered the 'I Have a Dream' speech in 1963. He was assassinated in Memphis in 1968."
  },
  "01-27": {
    category: "Person",
    year: 1756,
    answers: ["Wolfgang Amadeus Mozart", "Mozart", "Wolfgang Mozart"],
    tiles: [
      "Born in Salzburg", "A child prodigy", "Toured Europe at six", "Over 600 works",
      "'The Magic Flute'", "Died at 35", "A requiem unfinished", "A rival named Salieri",
      "Played for empresses", "Buried unmarked", "A 1984 Best Picture", "Middle name Amadeus"
    ],
    explanation: "Wolfgang Amadeus Mozart, born 27 January 1756, was the Salzburg prodigy who wrote over 600 works before dying at 35. The 1984 film 'Amadeus' won Best Picture."
  },
  "02-12": {
    category: "Person",
    year: 1809,
    answers: ["Charles Darwin", "Darwin"],
    tiles: [
      "Born 1809", "A ship named for a dog", "Galapagos finches", "A five-year voyage",
      "'On the Origin of Species'", "Natural selection", "Nearly became a parson", "Shared Lincoln's birthday",
      "Studied barnacles for years", "Once on the £10 note", "Survival of the fittest", "A famous long beard"
    ],
    explanation: "Charles Darwin, born 12 February 1809 (the same day as Abraham Lincoln), sailed on HMS Beagle and proposed evolution by natural selection in 'On the Origin of Species'."
  },
  "03-14": {
    category: "Person",
    year: 1879,
    answers: ["Albert Einstein", "Einstein"],
    tiles: [
      "Born on Pi Day", "A patent clerk", "Miracle year, 1905", "Nobel Prize, 1921",
      "Fled Germany in 1933", "Wild white hair", "Refused a presidency", "E = mc squared",
      "Brownian motion", "Tongue out for a photo", "Princeton", "Relativity"
    ],
    explanation: "Albert Einstein, born 14 March 1879 (Pi Day, 3/14), reshaped physics with relativity. He won the 1921 Nobel for the photoelectric effect and declined the presidency of Israel."
  },
  "03-30": {
    category: "Person",
    year: 1853,
    answers: ["Vincent van Gogh", "Van Gogh", "Vincent Van Gogh"],
    tiles: [
      "Argued with Gauguin", "Hard to pronounce", "Lost part of his left", "Popular after death",
      "Self-image", "Night sky", "Too poor to use models", "Admitted to an asylum",
      "Sold one painting", "Broke sales records", "Don McLean", "Flowers"
    ],
    explanation: "Vincent van Gogh, born 30 March 1853, cut off part of his own ear after a row with Gauguin, painted 'The Starry Night' in an asylum along with many self-portraits and sunflowers, sold almost nothing in life, and is the subject of Don McLean's song 'Vincent'."
  },
  "04-15": {
    category: "Event",
    year: 1912,
    answers: ["Titanic", "RMS Titanic", "The Titanic"],
    tiles: [
      "Called unsinkable", "A maiden voyage", "Struck an iceberg", "Southampton to New York",
      "Too few lifeboats", "The band played on", "Around 1,500 lost", "A 1997 blockbuster",
      "'Heart of the Ocean'", "White Star Line", "Wreck found in 1985", "Four tall funnels"
    ],
    explanation: "RMS Titanic struck an iceberg and sank on 15 April 1912 on its maiden voyage, killing about 1,500. James Cameron's 1997 film made its story a global hit; the wreck was found in 1985."
  },
  "04-23": {
    category: "Person",
    year: 1564,
    answers: ["William Shakespeare", "Shakespeare"],
    tiles: [
      "Stratford-upon-Avon", "The Bard", "Born and died this day", "The Globe theatre",
      "'To be or not to be'", "Wrote 38 plays", "Married Anne Hathaway", "Coined new words",
      "A doomed Danish prince", "Star-crossed lovers", "154 sonnets", "On the river Avon"
    ],
    explanation: "William Shakespeare is traditionally said to have been both born (1564) and died (1616) on 23 April. The Bard of Avon wrote Hamlet, Romeo and Juliet, and much of modern English besides."
  },
  "05-29": {
    category: "Event",
    year: 1953,
    answers: ["Everest", "Mount Everest", "Mt Everest"],
    tiles: [
      "29 May 1953", "A beekeeper from NZ", "A Sherpa guide", "On the Nepal-Tibet border",
      "8,849 metres", "Edmund Hillary", "Tenzing Norgay", "Highest on Earth",
      "A coronation gift", "The South Col route", "Bottled oxygen", "The roof of the world"
    ],
    explanation: "On 29 May 1953 Edmund Hillary and Tenzing Norgay became the first to summit Mount Everest, the highest point on Earth. The news reached London just before Queen Elizabeth II's coronation."
  },
  "06-06": {
    category: "Event",
    year: 1944,
    answers: ["D-Day", "Normandy Landings", "D Day", "Invasion of Normandy"],
    tiles: [
      "6 June 1944", "Five code-named beaches", "Omaha and Utah", "Largest seaborne invasion",
      "On the Normandy coast", "Operation Overlord", "Paratroopers at night", "Eisenhower's order",
      "Gold, Juno, Sword", "Against the Atlantic Wall", "Allied landings", "A letter plus 'Day'"
    ],
    explanation: "D-Day, 6 June 1944, was the Allied invasion of Nazi-occupied France across five Normandy beaches, the largest seaborne assault in history and the turning point of the Western Front."
  },
  "06-28": {
    category: "Person",
    year: 1914,
    answers: ["Archduke Franz Ferdinand", "Franz Ferdinand", "Franz Ferdinand of Austria"],
    tiles: [
      "Heir to a throne", "Sarajevo, 1914", "Shot beside his wife Sophie", "Gavrilo Princip",
      "Of Austria-Hungary", "A driver's wrong turn", "The Black Hand", "Lit a world war's fuse",
      "An open-top car", "Of the Habsburg line", "Versailles, five years on", "Two fatal shots"
    ],
    explanation: "Archduke Franz Ferdinand, heir to Austria-Hungary, was assassinated with his wife Sophie in Sarajevo on 28 June 1914 by Gavrilo Princip, triggering World War I. The Treaty of Versailles was signed exactly five years later."
  },
  "07-04": {
    category: "Event",
    year: 1776,
    answers: ["Declaration of Independence", "US Declaration of Independence", "American Declaration of Independence"],
    tiles: [
      "4 July 1776", "Thirteen colonies", "Drafted by Jefferson", "Breaking from a king",
      "'Self-evident' truths", "Fireworks every year", "Signed in Philadelphia", "Hancock's bold signature",
      "Life, liberty, happiness", "George III rejected", "Two signers died on it", "A nation's birthday"
    ],
    explanation: "The Declaration of Independence, adopted 4 July 1776 and drafted by Thomas Jefferson, announced the thirteen colonies' break from Britain. Adams and Jefferson both died on its 50th anniversary."
  },
  "07-20": {
    category: "Event",
    year: 1969,
    answers: ["Moon Landing", "First Moon Landing", "Apollo 11 Moon Landing", "Moon landing by Apollo 11"],
    tiles: [
      "20 July 1969", "'One small step'", "Apollo 11", "The Sea of Tranquility",
      "650 million watched", "A flag held by wire", "Armstrong and Aldrin", "'The Eagle has landed'",
      "Footprints that remain", "Collins stayed in orbit", "Atop a Saturn V", "A giant leap"
    ],
    explanation: "On 20 July 1969 Apollo 11 set the first humans on the Moon. Neil Armstrong's 'one small step' was watched by an estimated 650 million people while Michael Collins orbited above."
  },
  "08-06": {
    category: "Event",
    year: 1945,
    answers: ["Hiroshima", "Bombing of Hiroshima"],
    tiles: [
      "6 August 1945", "A single bomber", "'Little Boy'", "At 8:15 in the morning",
      "A Japanese city", "The atomic first", "Nagasaki followed", "The Enola Gay",
      "A surviving domed ruin", "Ended a world war", "A mushroom cloud", "Ground zero"
    ],
    explanation: "On 6 August 1945 the bomber Enola Gay dropped the atomic bomb 'Little Boy' on Hiroshima, the first city ever struck by a nuclear weapon. Nagasaki was bombed three days later; Japan soon surrendered."
  },
  "08-15": {
    category: "Event",
    year: 1947,
    answers: ["India", "Republic of India", "Indian Independence"],
    tiles: [
      "15 August 1947", "At the midnight hour", "Nehru's first address", "Free from Britain",
      "A tryst with destiny", "Came with partition", "Pakistan born alongside", "A tricolour raised",
      "Gandhi's long struggle", "The Raj ends", "Saffron, white, green", "A vast new democracy"
    ],
    explanation: "India became independent from Britain at midnight on 15 August 1947, with Jawaharlal Nehru's 'Tryst with Destiny' speech. The same moment partitioned the subcontinent and created Pakistan."
  },
  "10-12": {
    category: "Person",
    year: 1492,
    answers: ["Christopher Columbus", "Columbus", "Cristoforo Colombo"],
    tiles: [
      "The year 1492", "Three small ships", "Sailing for Spain", "Born in Genoa",
      "Hunting 'the Indies'", "Nina, Pinta, Santa Maria", "A Caribbean landfall", "Thought he'd reached Asia",
      "He 'sailed the ocean blue'", "Four voyages in all", "A US October holiday", "Never reached the mainland"
    ],
    explanation: "Christopher Columbus made landfall in the Caribbean on 12 October 1492, sailing for Spain in the Nina, Pinta and Santa Maria, convinced he had reached Asia. He never set foot on the American mainland."
  },
  "10-31": {
    category: "Person",
    year: 1517,
    answers: ["Martin Luther", "Luther"],
    tiles: [
      "31 October 1517", "A German monk", "95 of them", "Nailed to a church door",
      "At Wittenberg", "Against selling pardons", "The Reformation begins", "Translated the Bible",
      "Shares a name with a dreamer", "Protestants follow", "A standoff at Worms", "A reformer, not a king"
    ],
    explanation: "On 31 October 1517 the monk Martin Luther is said to have nailed his 95 Theses to a church door in Wittenberg, attacking the sale of indulgences and igniting the Protestant Reformation."
  },
  "11-09": {
    category: "Event",
    year: 1989,
    answers: ["Berlin Wall", "The Berlin Wall", "Fall of the Berlin Wall"],
    tiles: [
      "9 November 1989", "Hammers and chisels", "Up for 28 years", "Dividing East and West",
      "A concrete barrier", "A Cold War symbol", "Checkpoint Charlie", "'Tear down this wall'",
      "Crowds danced on top", "Germany reunites", "By the Brandenburg Gate", "It fell, not rose"
    ],
    explanation: "The Berlin Wall, which had split the city since 1961, was opened on 9 November 1989 as crowds danced atop it and chipped it apart. Its fall symbolised the end of the Cold War; Germany reunified in 1990."
  },
  "11-22": {
    category: "Person",
    year: 1963,
    answers: ["John F Kennedy", "JFK", "John Kennedy", "John Fitzgerald Kennedy", "Kennedy"],
    tiles: [
      "22 November 1963", "In Dallas, Texas", "An open-top motorcade", "Youngest ever elected",
      "A pink suit beside him", "Brother Bobby followed", "The grassy knoll", "Lee Harvey Oswald",
      "An era called Camelot", "Cuban missiles, a year before", "'Ask not...'", "Shot from a window"
    ],
    explanation: "President John F. Kennedy was assassinated in Dallas on 22 November 1963, allegedly by Lee Harvey Oswald. The youngest man elected president, he had faced down the Cuban Missile Crisis a year earlier."
  },
  "12-07": {
    category: "Event",
    year: 1941,
    answers: ["Pearl Harbor", "Attack on Pearl Harbor", "Bombing of Pearl Harbor", "Pearl Harbour"],
    tiles: [
      "7 December 1941", "A Sunday morning", "Carrier-launched planes", "'A date of infamy'",
      "On the island of Oahu", "A US naval base", "Japan struck first", "USS Arizona",
      "Drew America into war", "Battleship row", "A surprise raid", "In Hawaii"
    ],
    explanation: "Japan's surprise attack on the US naval base at Pearl Harbor, Hawaii, on 7 December 1941 sank much of the Pacific fleet and drew the United States into World War II the next day."
  },
  "12-17": {
    category: "Person",
    year: 1903,
    answers: ["Wright Brothers", "The Wright Brothers", "Wright"],
    tiles: [
      "17 December 1903", "Two brothers", "Bicycle-shop owners", "At Kitty Hawk",
      "Lasted 12 seconds", "Covered 120 feet", "From Dayton, Ohio", "Orville and Wilbur",
      "First powered flight", "Spruce and canvas", "On a windy beach", "Aviation is born"
    ],
    explanation: "Orville and Wilbur Wright, bicycle makers from Ohio, made the first powered, controlled aeroplane flight at Kitty Hawk, North Carolina, on 17 December 1903. It lasted 12 seconds and covered 120 feet."
  },
  "12-25": {
    category: "Person",
    year: 1642,
    answers: ["Isaac Newton", "Newton", "Sir Isaac Newton"],
    tiles: [
      "Born on Christmas", "A falling apple", "Three laws of motion", "Defined gravity",
      "Premature and tiny", "Calculus, with a rival", "A reflecting telescope", "The 'Principia'",
      "Ran the Royal Mint", "Split light with a prism", "Knighted in 1705", "Old-calendar 1642"
    ],
    explanation: "Isaac Newton was born on Christmas Day 1642 (old calendar). He set out the three laws of motion and universal gravitation, co-invented calculus, and built the first reflecting telescope."
  }
};
