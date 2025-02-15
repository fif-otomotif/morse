/*
- fitur Morse 
- mati aja sana kang hapus wm

Kiyo•Editz™
Channel: https://whatsapp.com/channel/0029ValggF79mrGXnImOmk1F
Bot: https://github.com/KiyoEditz/Elaina-MD
Github: https://github.com/KiyoEditz/
*/

let handler = (m, { text, usedPrefix, command }) => {
    let teks = text || (m.quoted && m.quoted.text) || false;
    if (!teks) throw '_Masukkan teks!_\n\nContoh\n' + usedPrefix + command + ' ' + global.author;

    // Dictionary untuk konversi (dengan karakter yang diubah)
    const morseDict = {
        'a': '•–', 'b': '–•••', 'c': '–•–•', 'd': '–••', 'e': '•',
        'f': '••–•', 'g': '––•', 'h': '••••', 'i': '••', 'j': '•–––',
        'k': '–•–', 'l': '•–••', 'm': '––', 'n': '–•', 'o': '–––',
        'p': '•––•', 'q': '––•–', 'r': '•–•', 's': '•••', 't': '–',
        'u': '••–', 'v': '•••–', 'w': '•––', 'x': '–••–', 'y': '–•––',
        'z': '––••', '1': '•––––', '2': '••–––', '3': '•••––', '4': '••••–',
        '5': '•••••', '6': '–••••', '7': '––•••', '8': '–––••', '9': '––––•',
        '0': '–––––', ' ': '/' 
    };

    // Konversi setiap karakter ke Morse
    let morse = teks.toLowerCase().split('').map(char => {
        return morseDict[char] || char; // Jika karakter tidak ada di kamus, biarkan apa adanya
    }).join(' ');

    m.reply(`Kode morse:\n\n${morse}`);
};

handler.tags = ['fun', 'tools'];
handler.command = handler.help = ['morse'];
module.exports = handler;

Demorse code :
/*
- fitur Demorse 
- mati aja sana kang hapus wm

Kiyo•Editz™
Channel: https://whatsapp.com/channel/0029ValggF79mrGXnImOmk1F
Bot: https://github.com/KiyoEditz/Elaina-MD
Github: https://github.com/KiyoEditz/
*/
let handler = (m, { text, usedPrefix, command }) => {

    let morse = text || (m.quoted && m.quoted.text) || false;

    if (!morse) throw '_Masukkan kode morse!_\n\nContoh\n' + usedPrefix + command + ' •– / –••• / –•–• / –•• / •';



    // Dictionary Morse to Text

    const morseDict = {

        '•–': 'a', '–•••': 'b', '–•–•': 'c', '–••': 'd', '•': 'e',

        '••–•': 'f', '––•': 'g', '••••': 'h', '••': 'i', '•–––': 'j',

        '–•–': 'k', '•–••': 'l', '––': 'm', '–•': 'n', '–––': 'o',

        '•––•': 'p', '––•–': 'q', '•–•': 'r', '•••': 's', '–': 't',

        '••–': 'u', '•••–': 'v', '•––': 'w', '–••–': 'x', '–•––': 'y',

        '––••': 'z', '•––––': '1', '••–––': '2', '•••––': '3', '••••–': '4',

        '•••••': '5', '–••••': '6', '––•••': '7', '–––••': '8', '––––•': '9',

        '–––––': '0', '/': ' '

    };



    // Split kode Morse berdasarkan spasi atau '/'

    let morseWords = morse.split(/\/|\s/);



    // Konversi setiap kata dalam Morse

    let teks = morseWords.map(word => {

        return word.split(' ').map(char => morseDict[char] || char).join(''); 

    }).join(' ');



    m.reply(`Teks hasil konversi:\n\n${teks}`);

};



handler.tags = ['fun', 'tools'];

handler.command = handler.help = ['dmorse','demorse']; // Mengubah command name

module.exports = handler;
