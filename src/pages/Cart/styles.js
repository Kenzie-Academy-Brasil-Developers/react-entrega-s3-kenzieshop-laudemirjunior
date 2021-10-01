import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 0px 10px 0 rgba(31, 38, 135, 0.37);
  cursor: pointer;
  article {
    max-width: 960px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    spam {
      margin: 0 10px;
    }
    button {
      background-color: lightgreen;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
