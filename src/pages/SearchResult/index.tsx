// Created by carsonaberle at 4/19/22
import React from "react";
import * as S from "./styles";
import Coins from "../../components/Coins";
import Transactions from "../../components/Transactions";
import WalletSection from "../../components/WalletSection";

export default function SearchResult({
  walletAddress,
  goBack,
}: SearchResultProps) {
  return (
    <S.div_SearchResultContainer>
      <S.p_SearchResultsBack onClick={goBack}>
        back to search
      </S.p_SearchResultsBack>
      <WalletSection title={"address"}>
        <p>{walletAddress}</p>
      </WalletSection>
      <Coins walletAddress={walletAddress} />
      <Transactions walletAddress={walletAddress} />
    </S.div_SearchResultContainer>
  );
}
