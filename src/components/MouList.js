import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const MouWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 15vh;
  margin-bottom: 10vh;
  img {
    max-width: 6%;
    width: inherit;
    height: auto;
  }
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
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Lists = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 90%;
  background: #fdfdfd;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  overflow: hidden;
`;

const Mous = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  column-gap: 2vh;
  background-repeat: repeat;
  @keyframes animation {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(-1400px);
    }
  }
  /* animation: animation 5s linear infinite forwards; */
`;

export const MouList = () => {
  const [lists, setLists] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLists = async () => {
    try {
      setError(null);
      setLists(null);
      setLoading(true);
      const response = await axios.get(
        "https://gsm-festival.s3.ap-northeast-2.amazonaws.com/company.json"
      );
      console.log(response.data);
      setLists(response.data);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <>
      {!loading && (
        <MouWrapper>
          <TextWrapper>
            <Text1>저희는 이 회사들과 함께해요!</Text1>
            <Text2>저희 GSM과 MOU를 맺은 회사입니다!</Text2>
          </TextWrapper>
          <ListWrapper>
            <Lists>
              <Mous>
                {lists &&
                  lists.slice(0, 15).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(15, 30).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(30, 45).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(45, 60).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(60, 75).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(75, 90).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(90, 105).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(105, 120).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(120, 135).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
              <Mous>
                {lists &&
                  lists.slice(135, 150).map((list) => {
                    return <img src={list.logo} />;
                  })}
              </Mous>
            </Lists>
          </ListWrapper>
        </MouWrapper>
      )}
    </>
  );
};

export default MouList;
