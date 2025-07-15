
// show content based on user selection
import RetireAt59AndHalf from "./RetireAt59AndHalf.jsx";
import GolfFitness from "./GolfFitness.jsx";
import UnderConstruction from "./UnderConstruction.jsx";
import SSClaim from "./SSClaim.jsx";
import SSAmountCalculator from "./SSAmountCalculator.jsx";


function Content({ name }) {
    switch(name) {
        case "RetireAt59AndHalf":
            return <RetireAt59AndHalf />;
        case "GolfFitness":
            return <GolfFitness />;
        case "SSClaim":
            return <SSClaim />;
        case "SSAmountCalculator":
            return <SSAmountCalculator />;
        default: 
            return <UnderConstruction />;
    }
}

export default Content;