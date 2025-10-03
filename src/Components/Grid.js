import { Grid } from "@mui/material";

export default function BasicGrid() {
    return (
        <Grid container sx={{ height: "500px", width: "1000px", border: "1px solid black" }}>
            <CardsContainerGrid player={1} />
            <CardsContainerGrid player={2}/>
        </Grid>
    );
}

export function CardsContainerGrid(props) {
    return (
        <Grid container size={6} sx={{ border: "1px solid red", padding: "10px" }}>
            <CardsGrid img={"/home/leon/Desktop/cards-game/src/Deck/2_of_clubs.png"}/>
            <CardsGrid />
            <CardsGrid />
            <PlayerGrid player={props.player}/>
        </Grid>
    );
}

export function CardsGrid(props) {
    return (
        <Grid container size={4} sx={{ height: "280px", border: "1px solid black" }}>
            <img src={props.img} />
        </Grid>
    );
}

export function PlayerGrid(props) {
    return (
        <Grid size={12} sx={{ border: "1px solid blue" }}>
            <h1 className="Player">Player {props.player}: </h1>
        </Grid>
    );
}