import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
height: 60px;
${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ padding: "10px 0px" })}
`;
// const Language = styled.span`
// font-size: 20px;
// cursor: pointer;
// ${mobile({ display: "none" })}
// `;
// const Image = styled.img`
// src: https://res.cloudinary.com/dwpvpeh7c/image/upload/v1669721921/Black___White_Minimalist_Business_Logo__1_-removebg-preview_mr06wi.png;
// width: 100%;
// height: 100%;
// `;
const SearchCotainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;
const Input = styled.input`
border: none;
${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
font-weight: bold;
text-align: center;
${mobile({ fontSize: "24px" })}
`;
const Left = styled.div`flex: 1;
flex: 1;
align-items: center;
display: flex;
`;
const Right = styled.div`flex: 1;
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;
const Center = styled.div`flex: 1;
flex: 1;
text-align: center;
`;
const MenuItem = styled.div`
font-size: 20px;
cursor: pointer;
margin-left: 25px;
${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchCotainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchCotainer>
        </Left>
        <Center>
          <Logo>Shoes.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};
export default Navbar
