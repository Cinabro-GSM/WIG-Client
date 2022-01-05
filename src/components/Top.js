import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

const TopBg = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #454545;
  width: 100%;
  height: 3.5vh;
  background-color: #ffffff;
  color: ${(props) => props.theme.MAIN_LIGHT_BLUE};
  transition: opacity 0.5s;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

const TopLogo = styled.img`
  width: 30px;
  height: 30px;
  display: block;
`;

const Menu = styled.div`
  width: 70px;
  height: 20x;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
`;

export default function Top() {
  const router = useRouter();

  return (
    <>
      <TopBg id="TopBar">
        <TopWrapper>
          <TopLogo src="/image/TopLogo.png" />
          <Menu
            onClick={() => {
              router.push("/");
            }}
          >
            메인
          </Menu>
          <Menu
            onClick={() => {
              router.push("/club");
            }}
          >
            동아리
          </Menu>
          <Menu
            onClick={() => {
              router.push("/major");
            }}
          >
            학과
          </Menu>
          <Menu
            onClick={() => {
              router.push("/project");
            }}
          >
            프로젝트
          </Menu>
        </TopWrapper>
      </TopBg>
    </>
  );
}
