import styled from "styled-components";

const OpinionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: 80vh;
`;

const Teacheropinion = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 700px;
  height: 700px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 57px;
`;

const Studentopinion = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 700px;
  height: 700px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 57px;
`;

const Text = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-weight: 900;
  font-size: 40px;
  word-spacing: 6px;
  margin-bottom: -10vh;
  
`;

const OpinionListWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin-left: 5vh; */
`;

const ListWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin-bottom: 10vh;
`;

const Lists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const Dot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(90deg, #2757D1 0%, #7D8AFF 100%);
  border-radius: 100%;
  margin: 0 auto;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
`;

const Opinions = styled.div`
  width: 35vh;
  height: 80%;
  background-color: #F2F2F2;
  border-radius: 15px;
  margin: 0 20px 0 20px;
  padding: 20px 0 0 20px;
`;

export const OpinionList = () => {
  return (
    <>
      <OpinionWrapper>
        <Teacheropinion>
          <OpinionListWrapper>
            <Text>선생님들은 저희 학교를</Text>
            <ListWrapper>
              <Lists/>
              <Lists>
                <Dot><Profile src="/image/Profile.png"/></Dot><Opinions>우리학교 참 좋같아요 ^^</Opinions>
              </Lists>
              <Lists className="two">
                <Opinions/><Dot><Profile src="/image/Profile.png"/></Dot>
              </Lists>
              <Lists>
                <Dot><Profile src="/image/Profile.png"/></Dot><Opinions/>
              </Lists>
            </ListWrapper>
          </OpinionListWrapper>
        </Teacheropinion>
        <Studentopinion>
          <OpinionListWrapper>
            <Text>학생 들은 저희 학교를</Text>
            <ListWrapper>
              <Lists/>
              <Lists>
                <Dot><Profile src="/image/Profile.png"/></Dot><Opinions/>
              </Lists>
              <Lists className="two">
                <Opinions/><Dot><Profile src="/image/Profile.png"/></Dot>
              </Lists>
              <Lists>
                <Dot><Profile src="/image/Profile.png"/></Dot><Opinions/>
              </Lists>
            </ListWrapper>
          </OpinionListWrapper>
        </Studentopinion>
      </OpinionWrapper>
    </>
  )
}

export default OpinionList