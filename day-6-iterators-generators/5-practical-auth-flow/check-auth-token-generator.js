
/*
We define our generator here.  Notice that it passes token values
through three validation functions, which happen in an order of
priority.
 */
export function *checkAuthToken(token) {
    yield checkProvider(token.provider);
    yield checkUser(token.username);
    yield isTokenAuthentic(token.auth);
}

function checkProvider(provider) {

    const authorizedProvers = [
        'Predix UAA',
        'Google',
        'Facebook'
    ];

    if(authorizedProvers.indexOf(provider) === -1) {
        throw new Error('You are not authenticated by an accepted provider.')
    }
}

function checkUser(user) {

    const users = [
        'Mario',
        'Luigi',
        'Toad',
        'Peach'
    ];

    if(users.indexOf(user) === -1) {
        throw new Error('The username provided was not found.  Please create a new account.');
    }
}

function isTokenAuthentic(authCode) {

    if(!/^bearer .*/.test(authCode)) {
        throw new Error('The token passed was not valid.');
    }
}