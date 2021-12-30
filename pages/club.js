import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const InfoWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
`;

const Info = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 0 15vh 15vh;
  width: 40vh;
  height: 60%;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  grid-template-rows: 150px 100px 200px 150px;
`;

const InfoHead = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const InfoDesc = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const InfoCount = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20vh;
`;

const InfoCounts = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 4.5vh;
  font-size: 24px;
  font-weight: 700;
`;

const SearchWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  row-gap: 1vh;
  input {
    width: 289px;
    height: 42px;
    border-radius: 20px;
    border: none;
    background-color: rgba(218, 218, 218, 1);
  }
`;

const ClubWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  row-gap: 0;
`;

const MajorClubs = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 35vh;
`;

const FreeClubs = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 35vh;
`;

const ClubHead = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100vh;
  height: 10%;
  font-size: 20px;
  font-weight: 400;
  row-gap: 1vh;
  margin-left: 5vh;
  margin-bottom: 2vh;
`;

const Line = styled.div`
  width: 100vh;
  height: 1px;
  border-bottom: 1px solid transparent;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    #000000 53.12%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const ClubsVowel = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 105%;
  height: 24.5vh;
  overflow-x: hidden;
  overflow-y: auto;
  row-gap: 1.45vh;
  padding-top: 1vh;
  padding-bottom: 1.5vh;
`;

const Clubs = styled.div`
  width: 100vh;
  height: 135px;
  background: #ffffff;
  box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
`;

const ClubIntro = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const ClubName = styled.div`
  margin: 1vh 4vh 0 3vh;
  font-size: 20px;
  font-weight: 700;
`;

const ClubDesc = styled.div`
  margin: 1vh 4vh 0 3vh;
  background-color: black;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const Club = () => {
  const [clubs, setClub] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchClubs = async () => {
    try {
      setError(null);
      setClub(null);
      setLoading(true);
      const response = await axios.get(
        "https://gsm-festival.s3.ap-northeast-2.amazonaws.com/MajorClub.json"
      );
      console.log(response.data);
      setClub(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchClubs();
  }, []);

  const ClubList = clubs?.map((item) => (
    <Clubs>
      <ClubIntro>
        <ClubName>{item.name}</ClubName>
        <ClubName>{item.major}</ClubName>
      </ClubIntro>
      <ClubDesc>{item.description}</ClubDesc>
    </Clubs>
  ));

  return (
    <>
      <Main>
        <InfoWrapper>
          <Info>
            <InfoHead>Club</InfoHead>
            <InfoDesc>저희 학교에서 운영하는 동아리입니다.</InfoDesc>
            <InfoCount>
              <InfoCounts>
                전공동아리
                <br />
                {clubs && clubs.length}개
              </InfoCounts>
              <InfoCounts>
                자율동아리
                <br />
              </InfoCounts>
            </InfoCount>
            <SearchWrapper>
              <input type="text" placeholder=" 검색" />
            </SearchWrapper>
          </Info>
        </InfoWrapper>
        <ClubWrapper>
          <MajorClubs>
            <ClubHead>
              전공동아리
              <Line />
            </ClubHead>
            <ClubsVowel>{ClubList}</ClubsVowel>
          </MajorClubs>
          <FreeClubs>
            <ClubHead>
              자율동아리
              <Line />
            </ClubHead>
            <ClubsVowel></ClubsVowel>
          </FreeClubs>
        </ClubWrapper>
      </Main>
    </>
  );
};

export default Club;
