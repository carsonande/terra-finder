// Created by carsonaberle at 4/19/22
import React from "react";
import * as S from "./styles";
import { WalletSectionProps } from "./types";

export default function WalletSection({ title, children }: WalletSectionProps) {
  return (
    <S.div_WalletSectionContainer>
      <S.div_WalletSectionHeader>
        <S.p_WalletSectionHeaderTitle>{title}</S.p_WalletSectionHeaderTitle>
      </S.div_WalletSectionHeader>
      <S.div_WalletSectionChildren>{children}</S.div_WalletSectionChildren>
    </S.div_WalletSectionContainer>
  );
}
