type TXS = {
  id: number;
  chainId: string;
  gas_used: string;
  gas_wanted: string;
  height: string;
  tx: {
    type: string;
    value: {
      fee: {
        gas: string;
        amount: { denom: string; amount: string }[];
      };
      memo: string;
      msg: any[];
      signatures: any[];
      timeout_height: string;
    };
  };
  txhash: string;
  logs: any[];
  rawLog: string;
  timestamp: string;
};
