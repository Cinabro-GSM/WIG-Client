import type { NextPage } from 'next'
import styled from "styled-components";
import MouList from '../src/components/MouList';
import OpinionList from '../src/components/OpinionList';

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
  background-color: #C4C4C4;
`;

const Mou = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  background-color: #FFFFFF;
`;

const Opinion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-color: #FFFFFF;
`;

const Home: NextPage = () => {
  return (
    <>
      <Main>styled components 적용완료</Main>
      <Mou>
        <MouList />
      </Mou>
      <Opinion>
        <OpinionList/>
      </Opinion>
    </>
  )
}

export default Home