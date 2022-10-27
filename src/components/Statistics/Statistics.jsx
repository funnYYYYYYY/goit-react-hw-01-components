import PropTypes from 'prop-types';
import { getRandomColor } from 'utils/getRandomColor';
import {
  Container,
  List,
  Title,
  Item,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item
              key={id}
              className="item"
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
