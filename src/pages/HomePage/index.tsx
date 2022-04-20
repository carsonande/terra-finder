// Created by carsonaberle at 4/19/22
import React, { useState } from "react";
import * as S from "./styles";

export default function Search({ onSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");

  function isValidAddress(address: string) {
    return /(terra1[a-z0-9]{38})/g.test(address);
  }

  const onChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClickSearch = () => {
    if (!isValidAddress(inputValue)) return;
    onSearch(inputValue);
  };

  return (
    <S.div_SearchContainer>
      <S.div_SearchBar>
        <S.input_SearchInput
          placeholder={"enter a wallet address..."}
          type={"text"}
          value={inputValue}
          onChange={onChangeInputValue}
        />
        <S.button_SearchButton
          isEnabled={isValidAddress(inputValue)}
          disabled={!isValidAddress(inputValue)}
          onClick={onClickSearch}
        >
          search
        </S.button_SearchButton>
      </S.div_SearchBar>
    </S.div_SearchContainer>
  );
}
