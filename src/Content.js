
// show content based on user selection
import RetireAt59AndHalf from "./RetireAt59AndHalf.js";
import GolfFitness from "./GolfFitness.js";
import UnderConstruction from "./UnderConstruction.js";


function Content({ name }) {
    switch(name) {
        case "RetireAt59AndHalf":
            return <RetireAt59AndHalf />;
        case "GolfFitness":
            return <GolfFitness />;
        default: 
            return <UnderConstruction />;
    }
}

export default Content;