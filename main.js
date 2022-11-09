let cards = document.querySelectorAll(".card");
const chanceCounter = document.getElementById("chance-counter");
const players = document.querySelectorAll(".player");
let chances = 0;
let whichPlayer = players[0].innerHTML;
let flippedAllCardsCounter = 0;
let sameIds = [];
let flippedCards = [];
let playerOneCounter = 0;
let playerTwoCounter = 0;
let images = [
  {
    imageurl: "./images/apple.jpeg",
    alt: "Apple",
  },
  {
    imageurl: "./images/banana.jpeg",
    alt: "Banana",
  },
  {
    imageurl: "./images/orange.jpeg",
    alt: "Orange",
  },
  {
    imageurl: './images/ananas.jpeg',
    alt: 'Ananas'
  },
  {
    imageurl: "./images/apple.jpeg",
    alt: "Apple",
  },
  {
    imageurl: "./images/banana.jpeg",
    alt: "Banana",
  },
  {
    imageurl: "./images/orange.jpeg",
    alt: "Orange",
  },
  {
    imageurl: './images/ananas.jpeg',
    alt: 'Ananas'
  }
];
players[0].classList.add("active");

chanceCounter.innerHTML = chances;
cards.forEach((card) => {
  card.addEventListener("click", function () {
    selectedCard(card);
    if (sameIds.length == 2) {
      if (sameIds[0] == sameIds[1]) {
        flipSameCardTwice();
      } else {
        if (flippedCards.length == 2) {
          if (flippedCards[0] == flippedCards[1]) {
            foundSameCards();
            if (flippedAllCardsCounter === 3) {
              finishGame();
            } else {
              flippedAllCardsCounter++;
            }
            findNewSameCards();
          } else {
            switchPlayer();
          }
        }
      }
    }
    card.classList.toggle("is-flipped");
  });
});

const selectedCard = (card) => {
  const selectCard = card.querySelector("img");
  flippedCards.push(selectCard.alt);
  sameIds.push(card.id);
};

const flipSameCardTwice = () => {
  chances++;
  sameIds = [];
  flippedCards = [];
  if (chances === 3) {
    whichPlayer === "Player 1"
      ? alert(`Lose ${whichPlayer}`)
      : alert(`Lose${whichPlayer}`);
    chances = 0;
    players[0].classList.add("active");
    players[1].classList.remove("active");
  }
  chanceCounter.innerHTML = chances;
};

const foundSameCards = () => {
  flippedCards = [];
  players.forEach((player) => {
    if (whichPlayer === "Player 1" && whichPlayer === player.innerHTML) {
      playerOneCounter++;
      player.nextElementSibling.innerHTML = playerOneCounter;
    } else if (whichPlayer === "Player 2" && whichPlayer === player.innerHTML) {
      playerTwoCounter++;
      player.nextElementSibling.innerHTML = playerTwoCounter;
    }
  });
};

const finishGame = () => {
  setTimeout(() => {
    whichPlayer === "Player 1"
      ? alert(`${whichPlayer} win this game`)
      : alert(`${whichPlayer} win this game`);
    window.location.reload();
    whichPlayer = players[0].innerHTML;
  
  }, 1800);
};

const findNewSameCards = () => {
  setTimeout(() => {
    alert("Successfully");
  }, 1000);
  setTimeout(() => {
    cards[sameIds[0] - 1].classList.add("is-flipped");
    cards[sameIds[1] - 1].classList.add("is-flipped");
    cards[sameIds[0] - 1].disabled = "true";
    cards[sameIds[1] - 1].disabled = "true";
    sameIds = [];
  }, 1300);
};

const switchPlayer = () => {
  flippedCards = [];
  whichPlayer === "Player 1"
    ? (whichPlayer = "Player 2")
    : (whichPlayer = "Player 1");

  setTimeout(() => {
    alert(`Switch ${whichPlayer}`);
  }, 1000);
  setTimeout(() => {
    cards[sameIds[0] - 1].classList.remove("is-flipped");
    cards[sameIds[1] - 1].classList.remove("is-flipped");
    for (let i = 0; i < players.length; i++) {
      if (players[i].innerHTML === whichPlayer) {
        players[i].classList.add("active");
      } else {
        players[i].classList.remove("active");
      }
    }
    sameIds = [];
  }, 1300);
};


const startGame = () => {
  images.sort(() => 0.5 - Math.random());
  console.log(images)
  for (let i = 0; i < cards.length; i++) {
    
    cards[i].querySelector(".card__face--back img").src =
      images[i].imageurl;
    if (cards[i].querySelector(".card__face--back img").src.includes("apple")) {
      cards[i].querySelector(".card__face--back img").alt = "Apple";
    } else if (
      cards[i].querySelector(".card__face--back img").src.includes("banana")
      
    ) {
      cards[i].querySelector(".card__face--back img").alt = "Banana";
    } else if (
      cards[i].querySelector(".card__face--back img").src.includes("orange")
    ) {
      cards[i].querySelector(".card__face--back img").alt = "Orange";
    }else if(cards[i].querySelector('.card__face--back img').src.includes('ananas')) {
      cards[i].querySelector('.card__face--back img').alt = "Ananas"
    }
  }
  console.log(cards)
};

startGame();
