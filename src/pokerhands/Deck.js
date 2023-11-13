// import {CARD_RANKS, SUITES} from "pokerhands/HandRanker";
/**
 * Fixed Import
 */
import { CARD_RANKS, SUITES } from "./HandRancker"

function createDeck() {
  const suits = Object.keys(SUITES).map(key => SUITES[key])
  const labels = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const rank = Object.keys(CARD_RANKS).map(key => CARD_RANKS[key])

  return labels
    .map((label, i) => {
      return suits.map(suite => {
        return {label, suite, rank: rank[i]}
      })
    }).reduce((labelAndSuites, acc) => {
      return acc.concat(labelAndSuites)
    }, [])
}

export function shuffleDeck(deck) {
  const clone = [...deck]
  const len = clone.length
  for (let x = len -1; x > 0; x--) {
    const y = Math.floor(Math.random() * x)
    const temp = clone[x]
    clone[x] = clone[y]
    clone[y] = temp
  }
  return clone
}

export function createShuffledDeck() {
  return shuffleDeck(createDeck())
}

// todo Task 1 - Picking from the Deck
export function pick(deck, pickCount) {
  const remainingDeck = deck;
  const pick = [];

  /**
   * While i is less than pickCount we run the below loop:
   * 1) We generate a random number within the range of the deck of cards remaing,
   * so that we can pick a card from our deck prop.
   * 2) We then remove that card at the generated index and add it to our pick CONST.
   * 3) We continue this proccess untill we run out of cards in our remainingDeck CONTS at which point we alert the user to regenerate a new deck of cards.
   */
  for (let i = 0; i < pickCount; i++) {
    if (remainingDeck.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingDeck.length);
      const pickedCard = remainingDeck.splice(randomIndex, 1)[0];
      pick.push(pickedCard);
    } else if(remainingDeck.length == 0){
      alert("Please create a new deck.");
      break;
    }
  }

  return [pick, remainingDeck];
}
