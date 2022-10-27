import PropTypes from 'prop-types';
import {
  Container,
  Items,
  List,
  Param,
} from 'components/Profile/Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <Param>{username}</Param>
        <Param>@{tag}</Param>
        <Param>{location}</Param>
      </div>

      <Items>
        <List>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </List>
        <List>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </List>
        <List>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </List>
      </Items>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
