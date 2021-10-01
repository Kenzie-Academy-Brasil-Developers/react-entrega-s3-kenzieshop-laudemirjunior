import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  height: 300px;
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 10px;
  padding: 10px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    height: 100%;
    img {
      width: 200px;
    }
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
