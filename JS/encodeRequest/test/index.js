import { data } from "../../deepEncode/test/index.js";
import { encodeRequestPayload } from "../index.js";

export const encodedPayload = encodeRequestPayload(data)

export const makefakeRequest = () => {
    fetch('',
        { method: "POST", body: encodedPayload }
    );
}