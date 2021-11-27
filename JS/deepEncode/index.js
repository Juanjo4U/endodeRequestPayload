export const deepEncodeOrDecode = (obj, toDecode = false) => {
    if (obj === undefined) return

    const action = toDecode ? decodeURIComponent : encodeURIComponent

    if (typeof obj !== 'object')
        return action(obj)
    const encoded = Array.isArray(obj) ? [] : {}

    for (const key in obj) {
        encoded[key] = deepEncodeOrDecode(obj[key], toDecode)
    }
    return encoded
}
