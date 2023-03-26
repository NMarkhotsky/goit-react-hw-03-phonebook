import PropTypes from 'prop-types';
import { ListItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      <ListItem contacts={contacts} deleteContact={deleteContact} />
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
