import './Market.css'

interface Coin {
    name: string;
    symbol: string;
    lastPrice: number;
    change24h: number;
}

const coinsData: Coin[] = [
    { name: 'Bitcoin', symbol: 'BTC', lastPrice: 8594, change24h: 2540 },
    { name: 'Binance Coin', symbol: 'BNB', lastPrice: 57207, change24h: -2304 },
    { name: 'Ethereum', symbol: 'ETH', lastPrice: 7129, change24h: -1320 },
    { name: 'Litecoin', symbol: 'LTC', lastPrice: 18661, change24h: 2140 },
    { name: 'Cardano', symbol: 'ADA', lastPrice: 37156, change24h: 1976 },
    { name: 'PancakeSwap', symbol: 'CAKE', lastPrice: 72650, change24h: -1903 },
];

const Market: React.FC = () => {
    return (
        <div className={'market'}>
            <h2 className={'title'}>Tendencia del mercado</h2>
            <table className={'table'}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Price</th>
                        <th>24h Change</th>
                    </tr>
                </thead>
                <tbody>
                    {coinsData.map((coin) => (
                        <tr key={coin.symbol} className={'row'}>
                            <td>
                                <span className={'symbol'}>{coin.symbol}</span> {coin.name}
                            </td>
                            <td>${coin.lastPrice}</td>
                            <td className={coin.change24h > 0 ? 'positive' : 'negative'}>
                                {coin.change24h}
                                {coin.change24h > 0 ? '▲' : '▼'}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Market;