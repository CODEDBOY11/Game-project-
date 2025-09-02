import { Grid, GridItem, Show } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>

          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Show>
      </Grid>
    </>
  );
};

export default NavBar;
