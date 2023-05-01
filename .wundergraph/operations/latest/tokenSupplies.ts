import { TokenSuppliesLatestResponseData } from '../../generated/models';
import { createOperation } from '../../generated/wundergraph.factory';

/**
 * This custom query will return a flat array containing the latest TokenSupply objects for
 * each endpoint.
 */
export default createOperation.query({
  handler: async (ctx) => {
    console.log(`Commencing latest query for TokenSupply`);

    // Combine across pages and endpoints
    const combinedTokenSupplies: TokenSuppliesLatestResponseData["treasuryEthereum_tokenSupplies"] = [];

    const queryResult = await ctx.operations.query({
      operationName: "tokenSuppliesLatest",
    });

    if (queryResult.data) {
      console.log(`Got ${queryResult.data.treasuryArbitrum_tokenSupplies.length} Arbitrum records.`);
      combinedTokenSupplies.push(...queryResult.data.treasuryArbitrum_tokenSupplies);
      console.log(`Got ${queryResult.data.treasuryEthereum_tokenSupplies.length} Ethereum records.`);
      combinedTokenSupplies.push(...queryResult.data.treasuryEthereum_tokenSupplies);
      console.log(`Got ${queryResult.data.treasuryFantom_tokenSupplies.length} Fantom records.`);
      combinedTokenSupplies.push(...queryResult.data.treasuryFantom_tokenSupplies);
      console.log(`Got ${queryResult.data.treasuryPolygon_tokenSupplies.length} Polygon records.`);
      combinedTokenSupplies.push(...queryResult.data.treasuryPolygon_tokenSupplies);
    }

    console.log(`Returning ${combinedTokenSupplies.length} records.`);
    return combinedTokenSupplies;
  },
});
