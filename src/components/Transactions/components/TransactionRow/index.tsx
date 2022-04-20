// Created by carsonaberle at 4/19/22
import React from "react";
import * as S from "./styles";
import { toFixedDecimal } from "../../../../utils/numbers";

export default function TransactionRow({ tx }: TransactionRowProps) {
  const type = tx.tx.value.msg[0].type.replace("wasm/", "");
  return (
    <S.div_TransactionRowContainer>
      <p>Hash: {tx.txhash}</p>
      <p>Type: {type}</p>
      <p>
        Block: {tx.height} ({tx.chainId})
      </p>
      <p>Timestamp: {tx.timestamp}</p>
      <p>Fee: {toFixedDecimal(tx.tx.value.fee.amount[0].amount)}</p>
    </S.div_TransactionRowContainer>
  );
}
