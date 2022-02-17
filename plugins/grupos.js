let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*_➤ Grupos oficiales del Bot:_*
*_1.-_* *https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ*

*_2.-_* *https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hRs*

*_3.-_* *https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM851F*

*_4.-_* *https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*

*_5.-_* *https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwlb*

*_➤ Grupo para pasar el rato:_*

*_1.-_* *https://chat.whatsapp.com/FWudhEVhEyWAgeZW78sUCL* 

`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 THE SHADOW BROKERS - BOT 🔥*', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
