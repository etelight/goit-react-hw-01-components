import PropTypes from 'prop-types';
import { MainBox } from 'components/Profile/profile.styled';
import {
  StatTitle,
  StatList,
  StatItem,
  Label,
  LabelPerc,
} from './statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <MainBox>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(({ id, label, percentage }, index) => (
          <StatItem key={id} even={index % 2 === 0}>
            <Label>{label}</Label>
            <LabelPerc>{percentage}%</LabelPerc>
          </StatItem>
        ))}
      </StatList>
    </MainBox>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
