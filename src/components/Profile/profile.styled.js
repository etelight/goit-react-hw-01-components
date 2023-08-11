import styled from '@emotion/styled';

export const MainBox = styled.div`
  margin: auto;
  margin-top: 10px;
  justify-content: center;
  padding: 15px 30px;
  width: 550px;

  transition: 0.3s;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export const Photo = styled.img`
  display: block;
  border: 2px solid #bebebe;
  border-radius: 50%;
  margin-bottom: 15px;
  margin-top: 10px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: #bebebe50;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
`;

export const UserName = styled.p`
  color: #080808;

  font-size: 30px;
  letter-spacing: 5px;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  color: #080808;
  font-size: 20px;
`;

export const Location = styled.p`
  color: #404040;
  font-size: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  border: 2px solid #bebebe;
  justify-content: space-around;
  border-radius: 5px;
  height: 80px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 17px;

  color: #404040;
`;

export const Quantity = styled.span`
  color: #404040;
  font-weight: bold;
`;
