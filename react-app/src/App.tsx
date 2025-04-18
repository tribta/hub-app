import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`, // base:320 & lg:1024
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem gridArea={"nav"} bg={"coral"}>
        Navigation Bar
      </GridItem>
      <GridItem
        gridArea={"aside"}
        bg={"gold"}
        display={{ base: "none", lg: "block" }}>
        Aside Bar
      </GridItem>
      <GridItem gridArea={"main"} bg={"dodgerblue"}>
        Main Display
      </GridItem>
    </Grid>
  );
};

export default App;
