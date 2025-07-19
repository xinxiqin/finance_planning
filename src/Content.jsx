
// show content based on user selection
import RetireAt59AndHalf from "./RetireAt59AndHalf.jsx";
import GolfFitness from "./GolfFitness.jsx";
import UnderConstruction from "./UnderConstruction.jsx";
import SSClaim from "./SSClaim.jsx";
import SSAmountCalculator from "./SSAmountCalculator.jsx";
import Introduction from "./Introduction.jsx";
import SSClaimCalculator from "./SSClaimCalculator.jsx";


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
        case "Introduction":
            return <Introduction />;
        case "SSClaimCalculator":
            return <SSClaimCalculator />;
        default: 
            return <UnderConstruction />;
    }
}

export default Content;