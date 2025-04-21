import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`, // base:320 & lg:1024
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem gridArea={"aside"} display={{ base: "none", lg: "block" }}>
        <GenreList
          onSelectGenre={setSelectedGenre}
          selectedGenre={selectedGenre}
        />
      </GridItem>
      <GridItem gridArea={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default App;
