import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
  name: Yup.string().min(2).max(20).required(''),
  number: Yup.string().required(''),
});

const phoneNumberMask = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

export { ContactSchema, phoneNumberMask };
