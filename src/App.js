import React from "react";
import './App.css'
// import {useDeck} from "hooks/useDeck"
// import {useHandRanker} from "hooks/useHandRanker"

/**
 * Fixed Import
 */
import { useDeck } from "./hooks/useDeck";
import { useHandRanker } from "./hooks/useHandRancker";

function App() {
  const [deck, hand, shuffleDeck, deal] = useDeck()
  const [handRank, rankHand] = useHandRanker()

  return (
    <div className="App">
      <div>
        Welcome to Poker hands!
      </div>
      <Deck {...{deck}}/>
      <Hand {...{hand}}/>
      <HandRank {...{handRank}} />
      <button onClick={shuffleDeck} id="createDeck">Create deck</button>
      <button onClick={deal} id="dealCards">Deal</button>
      <button onClick={() => {rankHand(hand)}}>Rank Hand</button>
    </div>
  )
}

function Deck({deck}) {
  if (!deck) return null
  return (
    <div>
      Number of cards in the deck: {deck.length}
    </div>
  )
}

function Hand({hand}) {
  if (!hand) return null
  return (
    <div>
      Number of cards in the hand: {hand.length}
      <div>
        {hand.map(card => <Card key={`${card.label}-${card.suite}`} {...{card}}/>)}
      </div>
    </div>
  )
}

function HandRank({handRank}) {
  if (!handRank) return null
  return (
    <div>
      Hand rank: {handRank.description}
    </div>
  )
}

function Card({card}) {
  if (!card) return null
  return (
    <div>
      {card.label}
    </div>
  )
}

export default App
