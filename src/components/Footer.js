import styled from "styled-components";

const FootBg = styled.div`
	display: flex;
	justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 25vh;
  background-color: #545454;
`;

const LeftFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 50px;
  margin-left: 10vh;
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  line-height: 2.3vh;
  margin-left: 2vh;
  color: #ffffff;
  font-weight: normal;
  font-size: 12px;
`;

const Text2 = styled.div`
  width: 200px;
  height: 50px;
  display: block;
  line-height: 2.3vh;
  color: #ffffff;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
`;

const FooterLogo = styled.img`
  width: 50px;
  height: 50px;
  display: block;
`;

const RightFooter = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin-right: 10vh;
  margin-top: 3vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: #3C3C3C;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 0;
`;

export default function Footer() {
    return (
      <>
        <FootBg>
          <LeftFooter>
            <FooterLogo src="/image/FooterLogo.png"/>
            <Text>
              광주소프트웨어마이스터고등학교 소개서비스 WIG<br/>
              version : 1.0.0
            </Text>
          </LeftFooter>
          <RightFooter>
            <Text2>
              문의 : gsm.hs.kr
            </Text2>
            <ButtonWrapper>
              <Button />
              <Button />
              <Button />
            </ButtonWrapper>
          </RightFooter>
        </FootBg>
      </>
    );
} 