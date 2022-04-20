// Created by carsonaberle at 4/19/22
import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import { LCDClient } from "@terra-money/terra.js";
import WalletSection from "../WalletSection";
import { toFixedDecimal } from "../../utils/numbers";

export default function Coins({ walletAddress }: CoinsProps) {
  const [coins, setCoins] = useState<COIN[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchCoins = useCallback(async () => {
    const lcd = new LCDClient({
      URL: "https://fcd.terra.dev",
      chainID: "bombay-12",
    });
    const [balance] = await lcd.bank.balance(walletAddress);
    setCoins(balance.toData() as unknown as COIN[]);
  }, [walletAddress]);

  useEffect(() => {
    fetchCoins().catch(() => setIsError(true));
  });

  const renderContent = () => {
    if (isError)
      return (
        <S.p_CoinsError>
          Coin lookup for "{walletAddress}" failed.
        </S.p_CoinsError>
      );
    return coins.map((coin) => {
      return (
        <S.div_CoinsItem>
          <S.p_CoinsTitle>{coin.denom}</S.p_CoinsTitle>
          <S.p_CoinsAmount>{toFixedDecimal(coin.amount)}</S.p_CoinsAmount>
        </S.div_CoinsItem>
      );
    });
  };

  return <WalletSection title={"coins"}>{renderContent()}</WalletSection>;
}
