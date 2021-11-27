import { deepEncodeOrDecode } from "../index.js";

export const data = {
    name: 'Juanjo',
    pass: `juTeest$BCNS2021`,
    message: `A$B%C@D#|E/f`,
    html: `<span class="text-muted">I'm the HTML</span>`,
    data: {
        birdthDate: '29-07-1994',
        contact: {
            email: 'jj4fer@gmail.com',
            phoneNumber: 617858072
        },
    },
    friends: [
        {
            name: 'José',
            data: {
                birdthDate: '29-08-1997',
                contact: {
                    email: 'joselito@gmail.com',
                    phoneNumber: 65465154
                },
            },
        },
        {
            name: 'Sergio',
            data: {
                birdthDate: '17-12-1993',
                contact: {
                    email: 'sergi@gmail.com',
                    phoneNumber: 987
                },
            },
        }
    ]
}

export const ENCODED_DATA = deepEncodeOrDecode(data)
export const DECODED_DATA = deepEncodeOrDecode(ENCODED_DATA, true)
