import styled from '@emotion/styled';

export const StatTitle = styled.h2`
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  color: #080808;
`;

export const StatList = styled.ul`
  align-items: center;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  flex-direction: column;
  padding: 20px;
  width: 33.33333%;
  align-items: center;

  display: flex;
  justify-content: center;
  background-color: ${props => (props.even ? '#bebebe20' : '#bebebe50')};
`;

export const Label = styled.span`
  color: #080808;
  font-size: 17px;
`;
export const LabelPerc = styled.span`
  margin-top: 8px;
  color: #080808;
  font-weight: bold;
  font-size: 20px;
`;
