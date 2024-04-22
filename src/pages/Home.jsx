import { Container, Box, Grid } from "@mui/material";
import { SearchResults } from "../section/Search";
import Filter from "../section/Filter/index";
import Footer  from "../layout/Profile/Footer";
const Home = () => {
  return (
    <div style={{position:"relative"}}>
      <Container maxWidth="xl" >
        <Box>
          <Grid container>
            <Grid item md={3} xs={12}>
              <Filter />
            </Grid>
            <Grid item md={9} xs={12}>
              <SearchResults />
            </Grid>
          </Grid>
        </Box>

        
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
