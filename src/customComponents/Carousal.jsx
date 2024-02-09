import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 75vh;
  position: relative;
  overflow-x: hidden;
  background:#FFF7F6;
`;




const MainComp = styled(Box)`
  display: flex;
  flex-direction: row;
  padding: 60px 140px;
  @media screen and (max-width: 1200px) {
    padding: 60px 40px;
  };
  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 50px 0px;
  };
  
`;

const StyledImage=styled(Box)({
  width:"100%",
  '& > img':{
    width:"90%",
    height:'100%',
    objectFit:'cover',
    borderRadius:10
  }
})
const StyledHeading=styled(Box)`
  font-size:60px;
  font-weight:700;
  line-height:65px;
  @media screen and (max-width: 900px) {
    font-size:24px;
  font-weight:700;
  line-height:30px;
  text-align:center;
  };
`
const StyledSubHeading=styled(Box)`
color:#4D4D4D;
font-size:18px;
padding:20px 0px;
@media screen and (max-width: 900px) {
  font-size:14px;
  text-align:center;
};
`
const ButtonBox=styled(Box)`
@media screen and (max-width: 900px) {
text-align:center;
}
`
const StyledButton = styled(Button)`
  background: #ee6043;
  color: white;
  text-transform: none;
  padding: 20px;
  // width:fit-content;
  border-radius: 5px;
  transition: all 0.3s ease; /* Adding a transition for smooth hover effect */

  &:hover {
    background: #ee6043;
    color: white;
  }

  @media screen and (max-width: 900px) {
    padding: 10px;
  }
`;

const FirstImage = () => {
  return (
    <Container>
      <div className="fixed top-0 z-20 w-full">
        {/* <CustomNav /> */}
      </div>
      {/* <Layer /> */}
    <MainComp>
      <Box padding="20px">
        <StyledHeading >
        Escape to Nature's Paradise 
        </StyledHeading>
        <StyledSubHeading>Oakwood Resort offers the ultimate in relaxation and adventure. Our stunning natural surroundings and luxurious accommodations provide the perfect retreat from the hustle and bustle of everyday life.</StyledSubHeading>
        <ButtonBox marginTop={2} 
        ><StyledButton
        >View All Services</StyledButton></ButtonBox>
      </Box>
        <StyledImage>
          <img src="/main.jpg" alt="" />
        </StyledImage>
    </MainComp>
       
    </Container>
  );
};

export default FirstImage;
