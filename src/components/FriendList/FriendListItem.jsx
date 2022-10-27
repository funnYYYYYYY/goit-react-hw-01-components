import { Online, Name, List, Image } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline = true }) => {
  return (
    <List>
      <>
        <Online color={isOnline ? 'green' : 'red'} />
      </>
      <Image src={avatar} alt="" width="48" />
      <Name>{name}</Name>
    </List>
  );
};
