import styled from 'styled-components';

export const FeedbackWrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;
  margin: 0;
  padding: 0;
`;

export const FeedBaclList = styled.li``;

export const FeedbackBtn = styled.button`
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  text-align: center;

  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 8px;
  border-radius: 10px;
  border-color: #cfeb62;
  box-shadow: rgba(216, 225, 215, 0.24) 0px 3px 8px;


  background-color: #eae286;
  color: #ed4b4b;
 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width:200px;

  &:active {
    background-color: grey;
  }
`;
