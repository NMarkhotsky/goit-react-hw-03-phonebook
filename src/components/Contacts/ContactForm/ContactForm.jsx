import { Formik, Field, ErrorMessage } from 'formik';
import { Form, Label, Button } from './ContactForm.styled';
import { ContactSchema, phoneNumberMask } from 'components/Utils/Validate';
import { nanoid } from 'nanoid';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  const generateId = nanoid();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={(values, action) => {
        onSubmit({ id: generateId, ...values }, { action });
      }}
    >
      <Form>
        <Label>
          Name*
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          />
        </Label>
        <ErrorMessage name="name" component={'span'} />
        <Label>
          Number*
          <Field
            name="number"
            type="tel"
            component={({ field }) => (
              <MaskedInput
                {...field}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="The phone number must contain 7 digits"
                mask={phoneNumberMask}
              />
            )}
          />
        </Label>
        <ErrorMessage name="number" component={'span'} />
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
