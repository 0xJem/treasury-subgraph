import { TokenSuppliesLatestResponseData } from "./generated/models";

type TokenSupply = TokenSuppliesLatestResponseData["treasuryEthereum_tokenSupplies"][0];

type TokenSupplyByDate = {
  date: string;
  block: number;
  records: TokenSupply[];
};

export const filterLatestBlockByDay = (records: TokenSupply[]): TokenSupply[] => {
  const filteredData = Object.values(records.reduce((acc: Record<string, TokenSupplyByDate>, curr: TokenSupply) => {
    const { date, block } = curr;
    const blockNumber = parseInt(block);
    if (!acc[date] || acc[date].block < blockNumber) {
      acc[date] = { date, block: blockNumber, records: [curr] };
    } else if (acc[date].block === blockNumber) {
      acc[date].records.push(curr);
    }
    return acc;
  }, {})).flatMap((record: TokenSupplyByDate) => record.records);

  return filteredData;
};

export const sortRecordsDescending = (records: TokenSupply[]): TokenSupply[] => {
  return records.sort((a, b) => {
    const aTime = new Date(a.date).getTime();
    const bTime = new Date(b.date).getTime();

    if (aTime > bTime) {
      return -1;
    } else if (aTime < bTime) {
      return 1;
    } else {
      return 0;
    }
  });
};
