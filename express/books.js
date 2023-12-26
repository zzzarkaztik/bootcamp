const books = [
  {
    id: 0,
    title: "Kaiju No. 8",
    description: "Read up on massive monsters and their backgrounds!",
    genre: "Sci-fi",
  },
  {
    id: 1,
    title: "Lord of the Rings: The Fellowship of the Ring",
    description:
      "Follow Frodo and the Felloship as they journey through Middle-earth!",
    genre: "Fantasy",
  },
  {
    id: 2,
    title: "The School for Good and Evil",
    description:
      "Follow the story of Disney characters as they go through school!",
    genre: "Fantasy",
  },
  {
    id: 3,
    title: "The Notebook",
    description: "They have a notebook, they fall in love.",
    genre: "Romance",
  },
  {
    id: 4,
    title: "Octopath Travel, Complete Guide",
    description: "Guide book to the game, Octopath Travel",
    genre: "Guide",
  },
  {
    id: 5,
    title: "Silent Patient",
    description: "The story of a therapist interested in a silent patient.",
    genre: "Thriller",
  },
  {
    id: 6,
    title: "Think and Grow Rich",
    description:
      "Navigate through the world of finance with this book as it helps you be more goal-oriented.",
    genre: "Self-Help",
  },
  {
    id: 7,
    title: "Orthodox Bible",
    description: "The Christian holy book.",
    genre: "Religious",
  },
  {
    id: 8,
    title: "I Kissed Dating Goodbye",
    description:
      "Offers ideas for improvement, alternative dating and courting practices, and the view that singleness need not be a burden.",
    genre: "Religious",
  },
  {
    id: 9,
    title: "Webster's Dictionary",
    description: "The 2023 version of the Wbester's Dictionary",
    genre: "Language",
  },
  {
    id: 10,
    title: "The Quantum Paradox",
    description:
      "Explore the mind-bending world of quantum physics and its paradoxes.",
    genre: "Sci-fi",
  },
  {
    id: 11,
    title: "Chronicles of Etheria",
    description:
      "Embark on an epic journey through the magical realms of Etheria.",
    genre: "Fantasy",
  },
  {
    id: 12,
    title: "Neural Networks Unleashed",
    description:
      "Dive into the realm of neural networks and artificial intelligence.",
    genre: "Technology",
  },
  {
    id: 13,
    title: "Galactic Explorers",
    description:
      "Join a crew of intrepid explorers as they venture into the far reaches of the galaxy.",
    genre: "Space Opera",
  },
  {
    id: 14,
    title: "Metropolis Reborn",
    description:
      "Witness the rebirth of a futuristic city in the midst of societal transformation.",
    genre: "Dystopian",
  },
  {
    id: 15,
    title: "Whispers of the Enchanted Forest",
    description:
      "Uncover the secrets and magic hidden within an enchanted forest.",
    genre: "Fantasy",
  },
  {
    id: 16,
    title: "Synthetic Souls",
    description:
      "Navigate a cyberpunk world where the line between humans and machines blurs.",
    genre: "Cyberpunk",
  },
  {
    id: 17,
    title: "Legacy of the Stars",
    description:
      "Embark on a spacefaring adventure filled with ancient mysteries and cosmic wonders.",
    genre: "Space Fantasy",
  },
  {
    id: 18,
    title: "Codebreakers",
    description:
      "Unravel thrilling mysteries as a group of codebreakers tackles high-stakes challenges.",
    genre: "Thriller",
  },
  {
    id: 19,
    title: "Steampunk Chronicles",
    description:
      "Step into a steampunk world where Victorian aesthetics meet advanced technology.",
    genre: "Steampunk",
  },
  {
    id: 20,
    title: "Eclipse of Eternity",
    description:
      "Embark on a journey through time and space as characters grapple with the concept of eternity.",
    genre: "Sci-fi",
  },
  {
    id: 21,
    title: "Quantum Mirage",
    description:
      "Navigate the intricate world of quantum illusions and alternate realities.",
    genre: "Sci-fi",
  },
  {
    id: 22,
    title: "Cybernetic Uprising",
    description:
      "Witness the rise of sentient machines in a gripping cyberpunk narrative.",
    genre: "Cyberpunk",
  },
  {
    id: 23,
    title: "Beyond the Nebula",
    description:
      "Explore the mysteries that lie beyond a celestial nebula in this space opera epic.",
    genre: "Space Opera",
  },
  {
    id: 24,
    title: "Infinite Code",
    description:
      "Dive into the world of coding and discover the power of an infinite code.",
    genre: "Technology",
  },
  {
    id: 25,
    title: "Rogue AIs and Renegades",
    description:
      "Experience a gripping tale of rebellion and artificial intelligence gone rogue.",
    genre: "Thriller",
  },
  {
    id: 26,
    title: "Gravity's Embrace",
    description:
      "Explore the forces that bind us in this thought-provoking sci-fi exploration.",
    genre: "Sci-fi",
  },
  {
    id: 27,
    title: "Virtual Realms",
    description:
      "Immerse yourself in virtual worlds and question the boundaries of reality.",
    genre: "Cyberpunk",
  },
  {
    id: 28,
    title: "Celestial Odyssey",
    description:
      "Embark on an odyssey through celestial realms filled with cosmic wonders and challenges.",
    genre: "Space Fantasy",
  },
  {
    id: 29,
    title: "Subterranean Dystopia",
    description:
      "Descend into the depths of a dystopian world where survival is a constant struggle.",
    genre: "Dystopian",
  },
  {
    id: 30,
    title: "Love Beyond Time",
    description:
      "A timeless romance that transcends the boundaries of time and space.",
    genre: "Romance",
  },
  {
    id: 31,
    title: "Hearts Entwined",
    description:
      "Follow the intertwined lives of characters as they navigate the complexities of love.",
    genre: "Romance",
  },
  {
    id: 32,
    title: "Sunset Serenade",
    description:
      "Experience the beauty of love against the backdrop of breathtaking sunsets.",
    genre: "Romance",
  },
  {
    id: 33,
    title: "Passionate Promises",
    description:
      "Journey through a tale of promises, passion, and the enduring power of love.",
    genre: "Romance",
  },
  {
    id: 34,
    title: "Whispers of the Heart",
    description:
      "Delve into the intimate whispers of the heart as characters discover the true meaning of love.",
    genre: "Romance",
  },
  {
    id: 35,
    title: "Eclipse of Eternity",
    description:
      "Embark on a journey through time and space as characters grapple with the concept of eternity.",
    genre: "Sci-fi",
  },
  {
    id: 36,
    title: "Quantum Mirage",
    description:
      "Navigate the intricate world of quantum illusions and alternate realities.",
    genre: "Sci-fi",
  },
  {
    id: 37,
    title: "Cybernetic Uprising",
    description:
      "Witness the rise of sentient machines in a gripping cyberpunk narrative.",
    genre: "Cyberpunk",
  },
  {
    id: 38,
    title: "Beyond the Nebula",
    description:
      "Explore the mysteries that lie beyond a celestial nebula in this space opera epic.",
    genre: "Space Opera",
  },
  {
    id: 39,
    title: "Infinite Code",
    description:
      "Dive into the world of coding and discover the power of an infinite code.",
    genre: "Technology",
  },
];

module.exports = { books };
