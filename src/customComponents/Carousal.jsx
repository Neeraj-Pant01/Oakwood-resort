import styled from "@emotion/styled";
import React from "react";
import CustomNav from "./CustomNav";

const images = ["/main.jpg"];
const texts = ["A NATURAL HEAVEN"];

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
`;

const Imagecontainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Layer = styled.div`
  height: 100%;
  width: 100%;
  background: rgb(0 0 0 / 40%);
  position: absolute;
  z-index: 1;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index:100;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  & > h3 {
    font-size: 36px;
    font-weight:700; 
  }

  & > h1 {
    font-size: 80px;
    font-weight:700;
    
  }
`;

const FirstImage = () => {
  return (
    <Container>
      {/* <div className="fixed top-0 z-20 w-full"> */}
        {/* <CustomNav /> */}
      {/* </div> */}
      <Layer />
      <Imagecontainer>
        <Image src={images[0]} alt="" />
        <TextOverlay >
          <h3>{texts[0]}</h3>
          <h1>BOOK YOUR TRIP</h1>
        </TextOverlay>
      </Imagecontainer>
    </Container>
  );
};

export default FirstImage;
