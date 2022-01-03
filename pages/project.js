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
  .card {
    position: relative;
    width: 270px;
    height: 300px;
    border-radius: 43px;
    transform: rotateY(0deg);
    transition: 1s;
    transform-style: preserve-3d;
    z-index: 2;
  }
  .card-side {
    display: grid;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 270px;
    height: 300px;
    background: #ffffff;
    border-radius: 43px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
    backface-visibility: hidden;
  }
  .card-side-front {
    z-index: 2;
  }
  .card-side-back {
    background: #545454;
    transform: rotateY(180deg);
    grid-template-rows: 180px 40px;
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
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 60vh;
  height: 85%;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  grid-template-rows: 100px 80px 1px 300px 50px;
  grid-template-columns: 85%;
`;

const InfoHead = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const InfoDesc = styled.div`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

const InfoCount = styled.div`
  display: flex;
  justify-content: space-around;
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid transparent;
  background-image: linear-gradient(
    270deg,
    rgba(0, 0, 0, 0) 0%,
    #000000 53.12%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const MajorWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 35% 35% 35%;
  width: 100%;
  height: 300px;
  border: 2px solid #d0d0d0;
  box-sizing: border-box;
  border-radius: 40px;
`;

const Majors = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  line-height: 4vh;
`;

const ProjectContainer = styled.div`
  padding-top: 6vh;
  padding-bottom: 4vh;
  padding-left: 3vh;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  grid-template-columns: repeat(3, 35%);
  row-gap: 5vh;
  overflow-x: hidden;
`;

const Projects = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 300px;
  background: #ffffff;
  grid-template-columns: 80%;
  grid-template-rows: 80px 20px 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 43px;
  min-height: 300px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border-radius: 30px;
    background-color: #acacac;
    text-align: center;
    text-decoration: none;
    color: white;
    cursor: pointer;
    z-index: 3;
  }
`;

const ProjectHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  img {
    max-width: 30%;
    width: inherit;
    height: auto;
  }
`;

const ProjectMajor = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
`;

const ProjectDesc = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  color: rgba(182, 182, 182, 1);
  text-align: left;
`;

const Project = () => {
  const [services, setService] = useState();
  const [projects, setProject] = useState();
  const [totals, setTotal] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const testtest = async () => {
    try {
      setError(null);
      setTotal(null);
      setLoading(true);
      const [res1, res2] = await axios.all([
        axios.get(
          "https://gsm-festival.s3.ap-northeast-2.amazonaws.com/service.json"
        ),
        axios.get(
          "https://gsm-festival.s3.ap-northeast-2.amazonaws.com/project.json"
        ),
      ]);
      setService(res1.data);
      setProject(res2.data);
      setTotal(res1.data.concat(res2.data));
      console.log(res2.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    testtest();
  }, []);

  const TotalLists = totals?.map((item) => (
    <div className="card">
      <Projects className="card-side card-side-front">
        <ProjectHead>
          <img src={item.logo} />
          {item.name}
        </ProjectHead>
        <Line />
        <ProjectMajor>{item.major}</ProjectMajor>
        <ProjectDesc>{item.description}</ProjectDesc>
      </Projects>
      <Projects className="card-side card-side-back">
        <a target="_blank" href={item.github}>
          Github
        </a>
        <a target="_blank" href={item.link}>
          바로가기
        </a>
      </Projects>
    </div>
  ));

  const web = totals?.filter((item) => item.major.includes("Web"));
  const and = totals?.filter((item) => item.major.includes("Android"));
  const iOS = totals?.filter((item) => item.major.includes("iOS"));
  const dis = totals?.filter((item) => item.major.includes("DiscordBot"));
  const AI = totals?.filter((item) => item.major.includes("AI"));
  const Game = totals?.filter((item) => item.major.includes("Game"));

  return (
    <>
      <Main>
        <InfoWrapper>
          <Info>
            <InfoHead>Project</InfoHead>
            <Line />
            <InfoDesc>이제까지 저희 학교에서 나온 프로젝트입니다.</InfoDesc>
            <InfoCounts>
              총 프로젝트
              <br />
              {totals && totals.length}
            </InfoCounts>
            <InfoCount>
              <InfoCounts>
                서비스
                <br />
                {services && services.length}
              </InfoCounts>
              <InfoCounts>
                프로젝트
                <br />
                {projects && projects.length}
              </InfoCounts>
            </InfoCount>
            <MajorWrapper>
              <Majors>
                web
                <br />
                {web && web.length}개
              </Majors>
              <Majors>
                android
                <br />
                {and && and.length}개
              </Majors>
              <Majors>
                iOS <br />
                {iOS && iOS.length}개
              </Majors>
              <Majors>
                DiscordBot <br />
                {dis && dis.length}개
              </Majors>
              <Majors>
                AI <br />
                {AI && AI.length}개
              </Majors>
              <Majors>
                GAME <br />
                {Game && Game.length}개
              </Majors>
            </MajorWrapper>
          </Info>
        </InfoWrapper>
        <ProjectContainer>{TotalLists}</ProjectContainer>
      </Main>
    </>
  );
};

export default Project;
