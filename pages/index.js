import styled from "styled-components";
import MouList from "../src/components/MouList";
import OpinionList from "../src/components/OpinionList";
import MP from "../public/image/main.png";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-image: url("/image/main.png");
  background-repeat: no-repeat;
  background-size: cover;
  font-size: 5vh;
  text-align: center;
`;

const Mou = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  background-color: #ffffff;
`;

const Opinion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-color: #ffffff;
`;

const Home = () => {
  return (
    <>
      <Main>
        광주소프트웨어 <br />
        마이스터고등학교의 모든 것
      </Main>
      <Mou>
        <MouList />
      </Mou>
      <Opinion>
        <OpinionList />
      </Opinion>
    </>
  );
};

export default Home;
