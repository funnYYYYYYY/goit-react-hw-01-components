import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { Container } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ id, avatar, isOnline, name }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
