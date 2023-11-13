import {useCallback, useState} from "react";
// import {good5CardHandRanker as handRanker} from "pokerhands/HandRanker";
/**
 * Fixed Import
 * changed good5CardHandRanker to fiveCardHandRanker as per exported function in ../pokerhands/HandRancker;
 */
import {fiveCardHandRanker as handRanker} from "../pokerhands/HandRancker";

export function useHandRanker() {
  const [handRank, setHandRank] = useState(undefined)
  const rankHand = useCallback((hand) => {
    setHandRank(handRanker(hand))
  }, [setHandRank])

  return [handRank, rankHand];
}

