import styled from "styled-components"
import Marquee from "react-fast-marquee";

const Container = styled.div`
height: 30px;
background-color: DarkSlateBlue;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        <Marquee direction="right" speed='100'>Free Ship</Marquee>
    </Container>
  )
}

export default Announcement
