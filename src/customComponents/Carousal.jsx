import styled from "@emotion/styled";
import { useEffect, useState } from "react"
import CustomNav from "./CustomNav";

const images = ["/slide2.jpg", "/slide3.webp", "/slide1.jpeg"]

const Container = styled.div`
display:flex;
width:100%;
height:100vh;
position:relative;
overflow-x: hidden;
// border:2px solid red;
`;
const Slide = styled.div`
display:flex;
height:100vh;
width:100vw;
// background-color: #${(props) => props.bg};
`;

const Imagecontainer = styled.div`
flex:1;
height:100%;
`;
const Image = styled.img`
height:100%;
width:100%;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease;
  transform: translateX(${(props) => props.current * -100}vw);
`;

const Layer = styled.div`
height:100%;
width:100%;
background:rgba(0, 0, 0, 0.4);
position:absolute;
// border:2px solid yellow;
z-index:300;
`

const Carousal = () => {
  const [current, setCurrent] = useState(0)

  const createSlideImages = () => {
    setCurrent(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      createSlideImages();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const img = images[current]

  return (
    <Container>
      <div className="fixed top-0 z-20 w-full">
        <CustomNav />
      </div>
      <Layer />
      <Wrapper current={current}>
        {
          images.map((item, i) => {
            return (
              <Slide key={i}>
                <Imagecontainer>
                  <Image src={item} alt="" />
                </Imagecontainer>
              </Slide>
            )
          })
        }
      </Wrapper>
    </Container>
  )
}

export default Carousal
