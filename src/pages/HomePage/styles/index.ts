// Created by carsonaberle at 4/19/22
import styled from "styled-components";

export const div_SearchContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const div_SearchBar = styled.div`
  justify-content: flex-start;
`;

export const input_SearchInput = styled.input`
  border-radius: 12px;
  padding: 12px;
  font-size: 18pt;
  margin-right: 24px;
`;

export const button_SearchButton = styled.button<{ isEnabled: boolean }>`
  border-radius: 12px;
  padding: 12px;
  font-size: 18pt;
  margin-right: 24px;
  color: #f1f1f1;
  background-color: #121212;
  opacity: ${(props) => (props.isEnabled ? 1 : 0.5)};
  cursor: ${(props) => (props.isEnabled ? "pointer" : "default")};
`;
