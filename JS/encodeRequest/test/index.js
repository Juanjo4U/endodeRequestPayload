import { encodeRequestPayload } from "../index.js";

export const encodedPayload = encodeRequestPayload(data)

fetch('',
    { method: "POST", body: encodedPayload }
);