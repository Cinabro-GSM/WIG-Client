import styled from "styled-components";

const MouWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  text-align: center;
`;

const Text1 = styled.div`
  width: 100%;
  display: block;
  font-weight: 900;
  font-size: 30px;
`;

const Text2 = styled.div`
  width: 100%;
  display: block;
  font-weight: 500;
  font-size: 15px;
  color: #999999;
  margin-top: 5vh;
`;

const ListWrapper = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

const Lists = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80%;
  background: #FDFDFD;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
`;

export const MouList = () => {
  return (
    <>
      <MouWrapper>
        <TextWrapper>
            <Text1>저희는 이 회사들과 함께해요!</Text1>
            <Text2>저희 GSM과 MOU를 맺은 회사입니다!</Text2>
        </TextWrapper>
        <ListWrapper>
          <Lists>
            
          </Lists>
        </ListWrapper>
      </MouWrapper>
    </>
  )
}

export default MouList