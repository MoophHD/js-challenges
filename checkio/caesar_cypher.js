//https://js.checkio.org/mission/caesar-cipher-encryptor

function toEncrypt(text, delta) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let code = text[i].codePointAt(0);
        //a..z
        if ( code >= 97 && code <= 122) {
            let encrypted = code + delta;

            if (encrypted < 97) {
                encrypted = 122 - (97 - encrypted) + 1;
            } else if (encrypted > 122) {
                encrypted = 97 + (encrypted - 122) - 1;
            }

            result += String.fromCodePoint(encrypted);
        } else {
            result += text[i];
        }
    }

    return result;
}