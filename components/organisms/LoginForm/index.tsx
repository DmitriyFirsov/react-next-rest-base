import { Formik, Form, FormikHelpers } from 'formik';

import { object, string } from 'yup';
import TextInput from 'components/atoms/formFields/Input';

const LoginValidationSchema = object().shape({
  email: string().email().required(),
  password: string().min(5).required(),
});

interface IFormValues {
  email: string;
  password: string;
}

const INITIAL_VALUES: IFormValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={(values: IFormValues, { setSubmitting }: FormikHelpers<IFormValues>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={LoginValidationSchema}
    >
      <Form>
        <TextInput label="email" name="email" />
        <TextInput label="password" name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
