import styled from "styled-components";

export const Container = styled.div`
  background-color: #212121;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalcArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2ba51d;
  border-radius: 15px;  
  width: 800px;
  margin-top: 30px;

  input {
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    width: 250px;
    font-size: 20px;
  }
`;

export const ContentCalc = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25%;
  width: 800px;
`;

export const ContentArea = styled.div`
 display: flex;
  flex-direction: column;
  background-color: #CCF5D5;
  width: 800px;
  border-radius: 0px 0px 15px 15px;
  color: black;
`;

export const ContentInfo = styled.div`
    margin-left: 25%;
`;