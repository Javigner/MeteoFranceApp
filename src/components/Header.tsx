import styled from "styled-components";

function Header() {
  return (
    <HeaderStyle>
      <TitleBox>
        <Title>METEO FRANCE</Title>
      </TitleBox>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.div`
  width: 100%;
  height: 300px;
  background-image: url("https://img5.goodfon.com/wallpaper/nbig/e/49/oblaka-nebo-art.jpg");
  background-size: cover;

  @media screen and (max-width: 620px) {
    height: 200px;
  }
`
const TitleBox = styled.div`
  height: 15em;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 4em;
  font-weight: 700;
  text-shadow: 1px 1px 0 rgb(0 0 0 / 35%), 1px 1px 5px rgb(0 0 0 / 50%);

  @media screen and (max-width: 1000px) {
    font-size: 3em;
  }
  
  @media screen and (max-width: 620px) {
    font-size: 2em;
  }
  
`
export default Header;