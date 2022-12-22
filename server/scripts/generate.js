const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils")

const privateKey = secp.utils.randomPrivateKey();
const publickey = secp.getPublicKey(privateKey);

console.log("Private key: ",toHex(privateKey))
console.log("Public key: ",toHex(publickey))


// user@Lord-Ranchoatos-MacBook-Pro server % node scripts/generate.js
// Private key:  502051da8b8b12ceb4500a17f6a7e403de9c9159fe288c21a29f3385bd7ff812
// Public key:  04c51b8a74f97dea738cb63f326d161315e5a9e7c2603e6c47f99920189df7de3ed7a8bea8b96c35b0ca2aa0a17594e78629142b143875fb0cb65366133e52aebe
// user@Lord-Ranchoatos-MacBook-Pro server % node scripts/generate.js
// Private key:  e8cd22d5c5e7407945d5b2f3a3a67c61135be0266432249d3a84a1d5a4ea553a
// Public key:  04eb08c6111b23e6c6beb169992315742b8f2b9dcee22f3eaf0f7551d6439592837ed06d1d5a222a5ab2730d8ee4798280613d18a57ab687aa5423e3f6921859f4
// user@Lord-Ranchoatos-MacBook-Pro server % node scripts/generate.js
// Private key:  bd24b5b2af8542bc5f354af09e14e87509b2cf0dee9a681851a8d62e23fa107c
// Public key:  047f3d8bb479a6369775d43a4905c0c1d6ffbcbb025d454ff36fb79ed06f2f03113568c9c602ccd0af60fd95fdada27a622d52cf70ceba13817bdeba9e23071647
// user@Lord-Ranchoatos-MacBook-Pro server % node scripts/generate.jscv