import Tabs, { ITabConfig } from '../../molecules/Tabs';
import { useMemo, useState } from 'react';
import { LoginFormContainer } from './components';

enum FormTypes {
  signIn,
  signUp,
  passwordRecovery,
}

const LoginForm = () => {
  const [form, setForm] = useState<FormTypes>(FormTypes.signIn);
  const TABS: ITabConfig<FormTypes>[] = useMemo(
    () =>
      [
        {
          id: FormTypes.signIn,
          title: 'Sign in',
        },
        {
          id: FormTypes.signUp,
          title: 'Create an account',
        },
        {
          id: FormTypes.passwordRecovery,
          title: 'Forgot your password',
        },
      ].map((item) => ({ ...item, action: (id) => setForm(id) })),
    [setForm],
  );

  return (
    <LoginFormContainer>
      <Tabs tabs={TABS} />
      {form}
    </LoginFormContainer>
  );
};

export default LoginForm;
