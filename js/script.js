const usernames = [
    'Asu', 'Asu', 'Ant', 'ant',
    'Bat', 'bat', 'Ber', 'ber', 'Bil', 'bil', 'Bom', 'bom', 'Bol', 'bol', 'Bry', 'bry',
    'Cel', 'cel', 'Cod', 'cod', 'Cil', 'cil',
    'Der', 'der', 'Dim', 'dim', 'Dor', 'dor',
    'Eli', 'eli', 'Ele', 'ele', 'Ell', 'ell', 'Eri', 'eri',
    'Fab', 'fab', 'Fer', 'fer',
    'Gro', 'gro', 'Gor', 'gor',
    'Ham', 'ham', 'Han', 'han', 'Hay', 'hay', 'Hid', 'hid', 'Hue', 'hue',
    'Kat', 'kat', 'Kol', 'kol', 'Kor', 'kor',
    'Jag', 'jag', 'Joh', 'joh', 'Jon', 'jon',
    'Inn', 'inn', 'Ilo', 'ilo',
    'Mar', 'mar', 'Muf', 'muf', 'Mus', 'mus',
    'Ola', 'ola',
    'Neo', 'neo', 'Nix', 'nix',
    'Sch', 'sch', 'Sna', 'sna',
    'Tam', 'tam', 'Tal', 'tal', 'Tra', 'tra',
    'Lam', 'lam', 'Lat', 'lat',
    'Wal', 'wal', 'Wil', 'wil',
    'Rat', 'rat', 'Ray', 'rye', 'Red', 'red', 'ray', 'Rye',
    'Par', 'par',
    'Xan', 'xan',
    'Yan', 'yan',
    'Zim', 'zim',
];

const stars = ['**', '***', '****', '*****', '******', '*******', '********'];

const CUR_INFO = [
    {
        alt: 'bitcoin',
        titleName: 'Bitcoin (BTC):',
        imgPath: 'img/bitcoin.svg',
        minAmount: 0.00183522,
        maxAmount: 0.03667333,
    },
    {
        alt: 'ethereum',
        titleName: 'Ethereum (ETH):',
        imgPath: 'img/ethereum.svg',
        minAmount: 0.02457840,
        maxAmount: 0.49114299,
    },
    {
        alt: 'binance-coin',
        titleName: 'Binance Coin (BNB):',
        imgPath: 'img/binance-coin.svg',
        minAmount: 0.17014386,
        maxAmount: 3.39764275,
    },
    {
        alt: 'bitcoin-cash',
        titleName: 'Bitcoin Cash (BCH):',
        imgPath: 'img/bitcoin-cash.svg',
        minAmount: 0.17808405,
        maxAmount: 3.56168092,
    },
    {
        alt: 'zcash',
        titleName: 'Zcash (ZEC):',
        imgPath: 'img/zcash.svg',
        minAmount: 0.38557708,
        maxAmount: 7.71154156,
    },
    {
        alt: 'monero',
        titleName: 'Monero (XMR):',
        imgPath: 'img/monero.svg',
        minAmount: 0.44664868,
        maxAmount: 8.94223807,
    },
    {
        alt: 'litecoin',
        titleName: 'Litecoin (LTC)',
        imgPath: 'img/litecoin.svg',
        minAmount: 0.51085875,
        maxAmount: 10.21717501,
    },
    {
        alt: 'solana',
        titleName: 'Solana (SOL)',
        imgPath: 'img/solana.svg',
        minAmount: 0.51812993,
        maxAmount: 10.36048745,
    },
    {
        alt: 'dash',
        titleName: 'Dash (DASH):',
        imgPath: 'img/dash.svg',
        minAmount: 0.53726595,
        maxAmount: 10.74531907,
    },
    {
        alt: 'avalanche',
        titleName: 'Avalanche (AVAX)',
        imgPath: 'img/avalanche.svg',
        minAmount: 0.92187648,
        maxAmount: 18.43752956,
    },
    {
        alt: 'polkadot',
        titleName: 'Polkadot (DOT)',
        imgPath: 'img/polkadot.svg',
        minAmount: 2.79994660,
        maxAmount: 56.10799445,
    },
    {
        alt: 'chainlink',
        titleName: 'Chainlink (LINK):',
        imgPath: 'img/chainlink.svg',
        minAmount: 4.21140425,
        maxAmount: 84.22808506,
    },
    {
        alt: 'algorand',
        titleName: 'Algorand (ALGO):',
        imgPath: 'img/algorand.svg',
        minAmount: 60.03540508,
        maxAmount: 1201,
    },
    {
        alt: 'cardano',
        titleName: 'Cardano (ADA):',
        imgPath: 'img/cardano.svg',
        minAmount: 64.31860740,
        maxAmount: 1286,
    },
    {
        alt: 'stellar',
        titleName: 'Stellar (XRP):',
        imgPath: 'img/stellar.svg',
        minAmount: 312.53503194,
        maxAmount: 6249,
    },
    {
        alt: 'dogecoin',
        titleName: 'Dogecoin (DOGE):',
        imgPath: 'img/dogecoin.svg',
        minAmount: 493.21854775,
        maxAmount: 9864,
    },
    {
        alt: 'tron',
        titleName: 'TRON (TRX):',
        imgPath: 'img/tron.svg',
        minAmount: 1077,
        maxAmount: 21545,
    },
];

const operTable = document.querySelector('.transaction-table__body');

// * GET TIME FUNCTIONS

function zeroInDate(value) {
    if (value < 10) value = '0' + value;
    return value;
}

function getCurrentDate() {
    let currentDate = new Date(),
        currentDay = zeroInDate(currentDate.getUTCDate()),
        currentMonth = zeroInDate(currentDate.getUTCMonth() + 1),
        currentYear = zeroInDate(currentDate.getUTCFullYear());

    return `${currentYear}-${currentMonth}-${currentDay}`;
}

function getCurrentTime() {
    let currentDate = new Date(),
        currentHours = zeroInDate(currentDate.getUTCHours()),
        currentMinutes = zeroInDate(currentDate.getUTCMinutes()),
        currentSeconds = zeroInDate(currentDate.getUTCSeconds());

    return `${currentHours}:${currentMinutes}:${currentSeconds}`;
}

// * OUTPUT FUNC

function getTableFragment(
    date, time, name, imgPath, titleName, alt, investAmount
) {
    return `<tr class="transaction-table__item">
                <td class="transaction-table__item-date">
                    <div>${date}</div>
                    <div>${time}</div>
                </td>
                <td class="transaction-table__item-username">${name}</td>
                <td class="transaction-table__item-content">
                    <img class="transaction-table__item-img" src="${imgPath}" alt="${alt}">
                    <span class="transaction-table__item-title">${titleName}</span>
                </td>
                <td class="transaction-table__item-amount">${investAmount}</td>
            </tr>
            `;
}

function getOperations(curArray, usernameArr, hidenameArr, outputTable) {
    for (let i = 0; i < curArray.length; i++) {

        let usernameArrIndex = Math.round(Math.random() * 100);
        let username = usernameArr[usernameArrIndex];
        let hidenameArrIndex = Math.round(Math.random() * 6);
        let hidename = hidenameArr[hidenameArrIndex];

        let randomNum = Math.round(Math.random() * 16);

        let intervalNum = (curArray[randomNum].maxAmount - curArray[randomNum].minAmount) + curArray[randomNum].minAmount;
        let investAmount;

        if (intervalNum < 100) investAmount = (Math.random() * intervalNum).toFixed(8);
        else investAmount = (Math.random() * intervalNum).toFixed(4);

        let tableItem = document.createElement('tr');
        tableItem.classList.add('crypto-rate__item');

        let date = getCurrentDate();
        let time = getCurrentTime();
        let fullname = username + hidename;

        tableItem.innerHTML += getTableFragment(
            date,
            time,
            fullname,
            curArray[randomNum].imgPath,
            curArray[randomNum].alt,
            curArray[randomNum].titleName,
            investAmount,
        );

        outputTable.appendChild(tableItem);

        // * Удаление ячейки при достижении нужного lenght

        if (outputTable.childNodes.length > 20) {
            outputTable.removeChild(outputTable.firstChild);
            break;
        }
        break;
    }
}

if (operTable.childNodes.length < 20) {
    for (let i = 0; i < 20; i++) {
        getOperations(CUR_INFO, usernames, stars, operTable);
    }
}

let randomNum2 = Math.random() * 10000;
setInterval(() => {
    getOperations(CUR_INFO, usernames, stars, operTable);
}, randomNum2
);