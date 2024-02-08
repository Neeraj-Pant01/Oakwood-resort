import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";



const StyledGrid = styled(Box)({
    display: "grid",
    padding:20,
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "50px", // Adjust the gap between boxes as needed
});
const StyledBox=styled(Box)({
    display:'flex',
    gap:20,
    boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
    justifyContent:'center',
    alignItems:"center",
    height:340,
    flexDirection:'column',
    '& > div':{
        '& > img':{
         width:50,
         height:50   
        }
    }
})
const Discover = () => {
  return (
    <div
      className="flex mt-10 items-center justify-center "
      style={{ padding: "0% 5%" }}
    >
      {/* upper heading  */}

      <div style={{padding:'15px', boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}>
        <div className=" flex flex-col items-center justify-center">
          <Typography
            color="#99cf21"
            fontSize={18}
            fontWeight="700"
            marginBottom={0.5}
          >
            OUR SERVICES
          </Typography>
          <Typography fontSize={28} fontWeight="700">
            EXPLORE OUR <span style={{ color: "#99cf21" }}>SERVICES</span>
          </Typography>
        </div>

        {/* for main data  */}

        <StyledGrid>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/fish.png" alt="" />
            </Box>
            <Box color= "#99cf21" fontSize="20px" fontWeight={700}>Rainbow Trout Fish</Box>
            <Box padding="15px" color="rgb(102, 101, 101)">
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/camp.png" alt="" />
            </Box>
            <Box>Rainbow Trout Fish</Box>
            <Box>
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/hiking.png" alt="" />
            </Box>
            <Box>Rainbow Trout Fish</Box>
            <Box>
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/camp.png" alt="" />
            </Box>
            <Box>Rainbow Trout Fish</Box>
            <Box>
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/dove.png" alt="" />
            </Box>
            <Box>Rainbow Trout Fish</Box>
            <Box>
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/orchid.png" alt="" />
            </Box>
            <Box>Rainbow Trout Fish</Box>
            <Box>
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>
          <StyledBox>
            <Box>
              <img src="/src/assets/icons/barbeque.png" alt="" />
            </Box>
            <Box>Rainbow Trout Fish</Box>
            <Box>
              Experience the beauty and excitement of the rainbow trout during
              your stay at our resort. As one of the most prized freshwater game
              fish, the rainbow trout offers both novice and experienced anglers
              an unforgettable fishing experience.
            </Box>
          </StyledBox>

        </StyledGrid>
      </div>
    </div>
  );
};

export default Discover;
