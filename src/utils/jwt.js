import jwt from 'jsonwebtoken'

export function createAccesoToken(payload) {

    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            'secreto123',
            {
                expiresIn: "1d"
            },
            (err, token) => {
                if (err) reject(err);
                resolve(token)
                //json({token});
            }
        );
    });
}