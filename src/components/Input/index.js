/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.colors.borderRadius};
  outline: 0;
  margin-botton: 25px;
`;

export default function Input({
  // eslint-disable-next-line react/prop-types
  type, value, onChange, ...props
}) {
  return (
    <div>
      <InputBase
        type={type}
        value={value}
        // placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

// Input.defaultProps = {
//   value: '',
// };

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  // placeholder: PropTypes.func.isRequired,
  // name: PropTypes.func.isRequired,
  // type: PropTypes.func.isRequired,
};
