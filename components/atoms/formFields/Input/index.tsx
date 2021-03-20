import { useField } from 'formik';
import styled, { css } from 'styled-components';

interface IInputProps {
  label: string;
  name: string;
}

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 0.4rem;
  }

  > *:last-child {
    margin-bottom: unset;
  }
`;

const ErrorMessage = styled.div(
  ({ theme: { colors } }) => css`
    color: ${colors.fieldError};
    font-size: 0.9rem;
  `,
);

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 0.3rem;
  border: 1px solid rgb(179, 179, 179);
`;

const TextInput = ({ label, name }: IInputProps) => {
  const [field, meta] = useField(name);

  return (
    <FieldContainer>
      <label htmlFor={name}>{label}</label>
      <StyledInput type="text" {...field} />
      {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
    </FieldContainer>
  );
};

export default TextInput;
