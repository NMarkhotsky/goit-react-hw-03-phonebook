import PropTypes from 'prop-types';
import { Label, P } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <P>Find contacts by name</P>
      <input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
