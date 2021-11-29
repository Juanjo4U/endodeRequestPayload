import { DECODED_DATA, ENCODED_DATA } from "./deepEncode/test/index.js";
import { makefakeRequest } from "./encodeRequest/test/index.js";

console.log(
    `ENCODED_DATA: `, ENCODED_DATA,
    `\n\n\n/////////////////////////////\n\n\n`,
    `DECODED_DATA: `, DECODED_DATA
);

makefakeRequest()