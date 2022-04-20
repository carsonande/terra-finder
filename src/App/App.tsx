import React, { useCallback, useState } from "react";
import * as S from "./styles";
import Search from "../pages/HomePage";
import GlobalStyle from "./styles/globalStyles";
import SearchResult from "../pages/SearchResult";
window.Buffer = window.Buffer || require("buffer");

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>();

  const goBack = useCallback(() => {
    setSearchTerm(undefined);
  }, []);

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const renderContent = () => {
    if (!searchTerm) return <Search onSearch={onSearch} />;

    return <SearchResult walletAddress={searchTerm} goBack={goBack} />;
  };
  return (
    <S.div_AppContainer>
      <GlobalStyle />
      {renderContent()}
    </S.div_AppContainer>
  );
}
