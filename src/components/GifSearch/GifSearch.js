import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 16px;
  margin-left: 5px;
  background: grey;
  color: white;
  transition: background 0.2s;

  &:hover {
    background: black;
  }
`;