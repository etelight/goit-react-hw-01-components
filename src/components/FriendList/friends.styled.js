import styled from '@emotion/styled';

export const StyledFriendsList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MyFriend = styled.li`
  margin-bottom: 15px;
  border-radius: 5px;

  padding: 20px;
  align-items: center;
  &:nth-child(odd) {
    background-color: #bebebe50;
  }
  &:nth-child(even) {
    background-color: #bebebe20;
  }
  font-weight: bold;
  font-size: 17px;
  color: #080808;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const FriendsStatus = styled.span`
  background-color: ${props => (props.isOnline ? '#00800090' : '#8a030390 ')};
  display: block;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
