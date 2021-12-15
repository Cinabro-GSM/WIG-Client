import type { NextPage } from 'next'
import styled from "styled-components";

const Main = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
  background-color: #C4C4C4;
`;

const Home: NextPage = () => {
  return (
    <>
      <Main>styled components 적용완료</Main>
    </>
  )
}

export default Home