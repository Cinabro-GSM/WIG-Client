import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  .card {
    width: 40vh;
    height: 70%;
    position: relative;
    transform: rotateY(0deg);
    transition: 1s;
    transform-style: preserve-3d;
    z-index: 2;
  }
  .card-side {
    width: 40vh;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    position: absolute;
    backface-visibility: hidden;
    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
  }

  .card-side-front {
    background: white;
    z-index: 2;
    grid-template-rows: 200px 0px 200px;
  }

  .card-side-back {
    background: white;
    transform: rotateY(180deg);
    z-index: 2;
  }

  .card:hover {
    transform: rotateY(180deg);
  }
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
  margin: 0 0 30vh 10vh;
  width: 40vh;
  height: 50%;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  grid-template-rows: 200px 100px;
`;

const InfoHead = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const InfoDesc = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  row-gap: 0;
`;

const Card = styled.div`
  position: relative;
  width: 40vh;
  height: 70%;
  background: #c4c4c4;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-bottom: 10vh;
  margin-right: -22vh;
`;

const Card3 = styled.div`
  position: relative;
  width: 40vh;
  height: 70%;
  background: #c4c4c4;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  margin-bottom: 10vh;
  margin-left: -22vh;
  z-index: 0;
`;

const CardHead = styled.div`
  width: 40vh;
  height: 100%;
  background-color: #c4c4c4;
  border-radius: 40px 40px 0 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  margin: 50px 0 0 40px;
  z-index: 1;
`;

const CardText = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  margin: 1.1vh 0 0 10px;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin: 0 0 0 40px;
`;

const MajorSection = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
`;

const Arrow = styled.img`
  position: relative;
  width: 5vh;
  height: 5vh;
  z-index: 2;
  right: 3vh;
  transform: rotate(180deg);
  cursor: pointer;
`;

const Arrow2 = styled.img`
  position: relative;
  width: 5vh;
  height: 5vh;
  z-index: 2;
  left: 3vh;
  cursor: pointer;
`;

const Major = () => {
  const [majors, setMajors] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMajors = async () => {
    try {
      setError(null);
      setMajors(null);
      setLoading(true);
      const response = await axios.get(
        "https://gsm-festival.s3.ap-northeast-2.amazonaws.com/education.json"
      );
      setMajors(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMajors();
  }, []);

  return (
    <>
      {!loading && (
        <Main>
          <InfoWrapper>
            <Info>
              <InfoHead>Department</InfoHead>
              <InfoDesc>저희 학교에서 운영하는 학과입니다.</InfoDesc>
            </Info>
          </InfoWrapper>
          <CardWrapper>
            <Card />
            <Arrow src="/image/arrow.png" />
            <div className="card">
              <div className="card-side card-side-front">
                <CardHead />
                <CardHeader>
                  공통 학과
                  <CardText>1학년</CardText>
                </CardHeader>
                <CardInfo>C,Java 배움</CardInfo>
              </div>
              <div className="card-side card-side-back">
                <MajorSection>
                  {majors &&
                    majors.FirstGrade.major.map((major) => (
                      <li key={major}>{major}</li>
                    ))}
                </MajorSection>
              </div>
            </div>
            <Arrow2 src="/image/arrow.png" />
            <Card3 />
          </CardWrapper>
        </Main>
      )}
    </>
  );
};

export default Major;
