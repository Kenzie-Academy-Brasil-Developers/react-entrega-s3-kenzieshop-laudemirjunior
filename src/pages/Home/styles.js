import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Display = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1000px;
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
    &::hover {
      background-color: lightblue;
      filter: saturate(3);
    }
    span {
      margin: 0 10px;
    }
  }
`;
