import styled from 'styled-components';


export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
  height: 90px;

  img {
    position: absolute;
    width: 60px;
    height: 60.21px;
    left: 45px;
    top: 15px;
  }

  div {
    justify-content: space-between;
  }

`;

export const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-around;
  background: linear-gradient(180deg, rgba(0, 189, 63, 0.38) 0%, rgba(162, 215, 74, 0.38) 100%);
  -webkit-font-smoothing: antialiased;
  margin: 0px;
`;

export const Categories = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  max-width: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 24px;
  text-decoration: none;

  width: 224px;
  height: 205px;
  left: 319px;
  top: 201px;

  a {
    width: 100%;
    padding: 24px;
    text-decoration: none;
  }

  h1 {
    color: #000;
    font-size: 26px;
  }

  img {
    width: 100px;
    height: 100px;
    left: 381px;
    top: 230px;
  }
`;


export const Footer = styled.footer`
  background: #fff;
  height: 90px;
`;
