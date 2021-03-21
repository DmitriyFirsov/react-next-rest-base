import Tabs, { ITabConfig } from 'components/molecules/Tabs';
import { useMemo, useState } from 'react';
import { CenterWrapper, LoginFormContainer } from './components';
import LoginForm from 'components/organisms/LoginForm';

enum FormTypes {
  signIn,
  signUp,
  passwordRecovery,
}

const LoginPageContainer = () => {
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
    <CenterWrapper>
      <LoginFormContainer>
        <Tabs tabs={TABS} defaultValue={FormTypes.signIn} />
        {form === FormTypes.signIn && <LoginForm />}
      </LoginFormContainer>
    </CenterWrapper>
  );
};

export default LoginPageContainer;
