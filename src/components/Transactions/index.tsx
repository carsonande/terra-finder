// Created by carsonaberle at 4/19/22
import React, { useCallback, useEffect, useState } from "react";
import * as S from "./styles";
import WalletSection from "../WalletSection";
import TransactionRow from "./components/TransactionRow";

export default function Transactions({ walletAddress }: TransactionsProps) {
  const [transactions, setTransactions] = useState<TXS[]>();
  const [isError, setIsError] = useState<boolean>(false);

  const fetchTransactions = useCallback(async () => {
    const responseTransactions = await fetch(
      `https://fcd.terra.dev/v1/txs?offset=0&limit=10&account=${walletAddress}`
    );
    const responseTransactionsJSON = await responseTransactions.json();
    setTransactions(responseTransactionsJSON.txs);
  }, [walletAddress]);

  useEffect(() => {
    fetchTransactions().catch(() => setIsError(true));
  });

  const renderContent = () => {
    if (!transactions)
      return <S.p_TransactionsInfo>Loading...</S.p_TransactionsInfo>;

    if (isError)
      return (
        <S.p_TransactionsError>
          Transaction lookup for "{walletAddress}" failed.
        </S.p_TransactionsError>
      );
    if (transactions?.length === 0) {
      return (
        <S.p_TransactionsInfo>
          There are no transactions for address "{walletAddress}".
        </S.p_TransactionsInfo>
      );
    }
    return (
      <S.divTransactions>
        {transactions.map((tx) => (
          <TransactionRow tx={tx} />
        ))}
      </S.divTransactions>
    );
  };

  return (
    <WalletSection title={"transactions"}>{renderContent()}</WalletSection>
  );
}
