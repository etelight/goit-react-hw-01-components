import styled from '@emotion/styled';

export const Table = styled.table`
  // background-color: #bebebe50;
  color: #080808;
  min-width: 450px;
  margin: auto;
  border-radius: 5px;
  padding-top: 20px;
`;

export const HeaderRow = styled.tr`
  background-color: initial;
  height: 40px;
`;

export const Row = styled.tr`
  min-width: 450px;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  font-size: 17px;

  &:nth-child(odd) {
    background-color: #bebebe50;
  }
  &:nth-child(even) {
    background-color: #bebebe20;
  }
`;

export const Data = styled.td`
  padding: 15px;
  text-align: center;
`;
