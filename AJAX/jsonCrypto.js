let urlCrypto = "https://api.coinpaprika.com/v1/global";

fetch(urlCrypto)
    .then((response) => response)
    .then((data) => doMagic(data));

function doMagic(data) {
    console.log(data);
}
