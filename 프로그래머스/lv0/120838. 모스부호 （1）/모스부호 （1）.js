function solution(letter) {
    let morse = {
        '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
        '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
        '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
        '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
        '-.--': 'y', '--..': 'z'
    }
    let morse_letter = letter.split(' ')
    let translate = ''
    for (let i = 0; i < morse_letter.length; i++) {
        for (j in morse) {
            if (morse_letter[i] === j) {
                translate += morse[j]
            }
        }
    }
    return translate
}
