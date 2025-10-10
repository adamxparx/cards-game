import { Grid } from "@mui/material";
import card from '../card.png';

export default function BasicGrid(props) {
    return (
        <Grid container sx={{ height: "500px", width: "1000px", border: "1px solid black" }}>

            <PlayerCardsGrid 
                playerCards={props.playerCards} 
                player={"You"} 
                score={props.playerScore} />

            <PlayerCardsGrid 
                playerCards={props.computerCards} 
                player={"Computer"} 
                score={props.computerScore} />

        </Grid>
    );
}

export function PlayerCardsGrid(props) {
    const importAll = (r) => {
        return r
            .keys()
            .sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)[0]);
                const numB = parseInt(b.match(/\d+/)[0]);
                return numA - numB;
            })
            .map(r);
    };
    let cards = importAll(require.context('../Deck', false, /\.(png|jpe?g|svg)$/));
    cards = [...cards, card];

    return (
        <Grid container spacing={1} size={6} sx={{ border: "1px solid red", padding: "10px" }}>

            {props.playerCards.map((index, _) => (
                <CardsGrid img={cards[index]} />
            ))}

            <PlayersGrid score={props.score} player={props.player}/>

        </Grid>
    );
}

export function CardsGrid(props) {
    return (
        <Grid container size={4} sx={{ height: "280px" }}>
            <img className="card-image" src={props.img} />
        </Grid>
    );
}

export function PlayersGrid(props) {
    return (
        <Grid size={12} sx={{ border: "1px solid blue" }}>
            <h1 className="Player">{props.player}: {props.score}</h1>
        </Grid>
    );
}