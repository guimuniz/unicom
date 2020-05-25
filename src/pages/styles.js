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

  p {
    font-size: 24px;
    margin-top: 20px;
    margin-left: 300px;
  }

  svg {
    margin-right: 8px;
    color: #3d3d4d;
    transition: color 0.2s;
  }

`;

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(180deg, rgba(0, 189, 63, 0.38) 0%, rgba(162, 215, 74, 0.38) 100%);
  -webkit-font-smoothing: antialiased;
  margin: 0px;
`;

export const Categories = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 80px;
  max-width: 500px;


  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0, 90px;
    background: #fff;
    border-radius: 10px;
    padding: 24px;
    text-decoration: none;
    width: 224px;
    height: 205px;
  }

  a {
    padding: 24px;
    text-decoration: none;
  }

  h1 {
    display: flex;
    justify-content: center;
    color: #000;
    font-size: 26px;
  }

  img {
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
  }
`;


export const Footer = styled.footer`
  background: #fff;
  height: 90px;
`;
