import { deepEncodeOrDecode } from "../deepEncode/index.js"

export const encodeRequestPayload = (form = {}) => {
    if (typeof form !== 'object') return deepEncodeOrDecode(form)
    return Object.entries(form)
        .reduce((acc, [key, val]) => {
            let encodedVal = deepEncodeOrDecode(val)
            if (typeof encodedVal === 'object')
                encodedVal = JSON.stringify(encodedVal)
            return acc + `${key}=${encodedVal}&`
        },
            ''
        )
        .slice(0, -1)
}