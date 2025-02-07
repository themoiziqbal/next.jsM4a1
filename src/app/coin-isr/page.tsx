
export default async function CoinMarket() {
    const API_KEY = "c3ce18acfd26400d197dca0115574f3c";
    const res = await fetch(
      `http://api.coinlayer.com/live?access_key=${API_KEY}`,
      {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
      }
    );
    const data = await res.json();
  
    return (
      <>
        BTC: {data?.rates?.BTC}
        <br />
        BNB: {data?.rates?.BNB}
      </>
    );
  }
  