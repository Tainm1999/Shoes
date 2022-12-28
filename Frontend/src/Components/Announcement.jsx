import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container><Marquee speed={100} direction={"right"}>Super Deal! Free Shipping on all Orders</Marquee></Container>;
};

export default Announcement;
