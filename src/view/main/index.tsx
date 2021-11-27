import { useState } from "react";
import { Box, Button } from "../../GlobalStyled";
import ButtonGroup from '@mui/material/ButtonGroup';
import { createTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';
import BirdSongs from "../../assets/BirdSongs.mp3";
import Night from "../../assets/Night.mp3";

const muiTheme = createTheme();
const traksData = [
    { id: 1, label: 'Together', trak: [BirdSongs, Night] },
    { id: 2, label: 'Birds Songs', trak: [BirdSongs] },
    { id: 3, label: 'Night Songs', trak: [Night] }
]
const Main = () => {
    const [srcTraks, setSrcTraks] = useState<Array<string>>([]);
    const [play, setPlay] = useState(false);
    const [prevId, setPrevId] = useState<number>(0);
  
    return (
        <>
            <Box justifyContent="center"><h3>Songs Traks Demo</h3></Box>
            <Box justifyContent="center">
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    {traksData.map(trak => <Button
                        key={trak.id}
                        onClick={() => {
                            setSrcTraks( (srcTraks.length ===0 && trak.trak) || (prevId !== trak.id ? trak.trak : []));
                            setPrevId(trak.id);
                            setPlay(true)
                        }}>{trak.label}</Button>)}
                </ButtonGroup>
            </Box>
            <Box justifyContent="center">
                <Box width="100%" flexDirection="column">
                    <ThemeProvider theme={muiTheme}>
                        {srcTraks.map(arr =>
                            <AudioPlayer
                                key={arr}
                                autoplay={play}
                                src={arr}
                            />
                        )}
                    </ThemeProvider>
                </Box>
            </Box>
        </>
    )
}
export default Main