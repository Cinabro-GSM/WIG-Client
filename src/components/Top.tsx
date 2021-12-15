import styled from "styled-components";

const TopBg = styled.div`
  display: flex;
	justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  background-color: #FFFFFF;
  color: ${(props) => props.theme.MAIN_BLUE};
`;

const TopWrapper = styled.div`
  width: 40%;
  background-color: black;
`;

const TopLogo = styled.img`
  width: 35px;
  height: 35px;
  display: block;
`;

export default function Top() {
    return (
      <>
        <TopBg>
          <TopWrapper>
            <TopLogo src="/image/TopLogo.png"/>
            
          </TopWrapper>
        </TopBg>
      </>
    );
} 