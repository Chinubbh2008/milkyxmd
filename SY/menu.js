// SY/menu.js

const fs = require('fs');
const os = require('os');
const path = require('path');

async function s_secret_7_MENU({
    db,
    botNumber,
    prefix,
    config,
    SYHaTeReplayS7,
    getRuntime,
    formatSize
}) {

    const uptime = getRuntime(process.uptime());

    const ram_used = formatSize(
        process.memoryUsage().rss
    );

    const ram_total = formatSize(
        os.totalmem()
    );

    let storage_used = "N/A";
    let storage_total = "N/A";

    try {

        const stats = fs.statfsSync('/');

        storage_total = formatSize(
            stats.bsize * stats.blocks
        );

        storage_used = formatSize(
            stats.bsize * (
                stats.blocks - stats.bfree
            )
        );

    } catch {}

    let customMenu = '';

    if (db[botNumber]?.customcmds) {

        const cmds = Object.keys(
            db[botNumber].customcmds
        );

        if (cmds.length > 0) {

            customMenu += `\n\n*╰┈➤ ᴄᴜsᴛᴏᴍ ᴄᴏᴍᴍᴀɴᴅs*\n`;

            cmds.forEach(cmd => {
                customMenu += `> *_✗  ${cmd}_*\n`;
            });

        }

    }

    const menu = `╭━━━【 𝐌𝐈𝐋𝐊𝐘 𝐗𝐌𝐃 】━━━┈⊷
┃ *_ᴏᴡɴᴇʀ_* :  *_𝐃 𝐇 — ا 𝐘_* 
┃ *_ʀᴜɴᴛɪᴍᴇ_*  :  ${uptime}
┃ *_ʀᴀᴍ_* : ${ram_used}/${ram_total}
┃ *_ꜱᴛᴏʀᴀɢᴇ_* : ${storage_used}/${storage_total}
┃ *_ᴩʀᴇꜰɪx_* : *_[ ${prefix} ]_* 
╰━━━━━━━━━━━━━━━━┈⊷

\`【 𝗔𝗜 】\`

╭───────────────────⊷
*┋ ⬡ .ɢᴘᴛ*
╰───────────────────⊷

\`【 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 】\`

╭───────────────────⊷
*┋ ⬡ .ꜰʙ*
*┋ ⬡ .ɪɢ*
*┋ ⬡ .ᴘʟᴀʏ*
*┋ ⬡ .ᴘʟᴀʏ2*
*┋ ⬡ .ꜱᴏɴɢ*
*┋ ⬡ .ꜱᴩᴏᴛɪꜰʏ*
*┋ ⬡ .ʏᴛᴍᴘ4*
*┋ ⬡ .ʏᴛᴠɪᴅᴇᴏ*
╰───────────────────⊷

\`【 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 】\`

╭───────────────────⊷
*┋ ⬡ .ᴏᴡɴᴇʀ*
*┋ ⬡ .ᴍᴇɴᴜ*
╰───────────────────⊷

\`【 𝗚𝗥𝗢𝗨𝗣 】\`

╭───────────────────⊷
*┋ ⬡ .ᴀᴅᴅ*
*┋ ⬡ .ᴍᴀꜱꜱᴀᴅᴅ*
*┋ ⬡ .ᴋɪᴄᴋ*
*┋ ⬡ .ᴋɪᴄᴋᴀʟʟ*
*┋ ⬡ .ᴘʀᴏᴍᴏᴛᴇ*
*┋ ⬡ .ᴅᴇᴍᴏᴛᴇ*
*┋ ⬡ .ᴛᴀɢ*
*┋ ⬡ .ᴛᴀɢᴀʟʟ*
*┋ ⬡ .ʜɪᴅᴇᴛᴀɢ*
*┋ ⬡ .ᴀɴᴛɪʟɪɴᴋ*
*┋ ⬡ .ᴀɴᴛɪʙᴏᴛ*
*┋ ⬡ .ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ*
*┋ ⬡ .ᴀɴᴛɪᴍᴇɴᴛɪᴏɴ*
*┋ ⬡ .ᴡᴇʟᴄᴏᴍᴇ*
*┋ ⬡ .ɢᴏᴏᴅʙʏᴇ*
*┋ ⬡ .ᴍᴜᴛᴇ*
*┋ ⬡ .ᴜɴᴍᴜᴛᴇ*
*┋ ⬡ .ꜱᴇᴛɢɴᴀᴍᴇ*
*┋ ⬡ .ꜱᴇᴛɢᴘᴘ*
*┋ ⬡ .ɢꜱᴛᴀᴛᴜꜱ*
*┋ ⬡ .ᴅᴇʟᴇᴛᴇ*
╰───────────────────⊷

\`【 𝗠𝗘𝗗𝗜𝗔 】\`

╭───────────────────⊷
*┋ ⬡ .ᴛᴏꜱᴛɪᴄᴋᴇʀ*
*┋ ⬡ .ᴘᴛᴠ*
*┋ ⬡ .ꜱᴛᴍᴀᴋᴇʀ*
*┋ ⬡ .ʙʀᴀᴛ*
╰───────────────────⊷

\`【 𝗢𝗪𝗡𝗘𝗥 】\`

╭───────────────────⊷
*┋ ⬡ .ᴀɴᴛɪᴄᴀʟʟ*
*┋ ⬡ .ꜱᴇʟꜰ*
*┋ ⬡ .ᴘᴜʙʟɪᴄ*
*┋ ⬡ .ᴘʀᴇꜰɪx ꜱᴇᴛ*
*┋ ⬡ .ꜱᴇᴛᴄʜᴀɴɴᴇʟ*
*┋ ⬡ .ᴠɪᴇᴡᴄʜᴀɴɴᴇʟ*
*┋ ⬡ .ᴘʀᴏᴍᴏᴛᴇᴍᴇ*
*┋ ⬡ .ɢᴇᴛʟɪᴅ*
*┋ ⬡ .ɢᴇᴛᴊɪᴅ*
*┋ ⬡ .ᴍꜱᴇᴛ*
*┋ ⬡ .ꜰᴜʟʟᴘᴘ*
╰───────────────────⊷

\`【 𝗣𝗥𝗢𝗙𝗜𝗟𝗘 / 𝗧𝗚 】\`

╭───────────────────⊷
*┋ ⬡ .ɢᴇᴛᴘᴘ*
*┋ ⬡ .ꜱᴇᴛᴘᴘ*
*┋ ⬡ .ᴛɢɪɴꜰᴏ*
*┋ ⬡ .ᴠᴠ*
*┋ ⬡ .ꜱᴀᴠᴇ*
*┋ ⬡ .ɢᴇᴛ*
*┋ ⬡ .ʟᴏᴏᴋᴜᴘ*
╰───────────────────⊷

\`【 𝗧𝗢𝗢𝗟𝗦 】\`

╭───────────────────⊷
*┋ ⬡ .ᴘɪɴɢ*
*┋ ⬡ .ᴘɪɴɢ2*
*┋ ⬡ .ʀᴇᴍɪɴɪ*
*┋ ⬡ .ꜱᴘᴀᴍ*
*┋ ⬡ .ꜱᴀᴠᴇᴍꜱɢ*
*┋ ⬡ .ᴅᴇʟᴍꜱɢ*
*┋ ⬡ .ʟɪꜱᴛɢᴄ*
*┋ ⬡ .ᴄʜᴇᴄᴋʀᴀᴡ*
*┋ ⬡ .ᴄʜᴇᴄᴋᴍꜱɢ*
*┋ ⬡ .ᴅᴇᴠɪᴄᴇ*
*┋ ⬡ .ᴄʜɪᴅ*
*┋ ⬡ .ꜰᴏɴᴛ*
*┋ ⬡ .ᴛᴛꜱ*
*┋ ⬡ .ᴍᴇɴᴛɪᴏɴ*
*┋ ⬡ .ᴀᴅᴍᴇɴᴛɪᴏɴ*
╰───────────────────⊷

\`【 𝗡𝗦𝗙𝗪 】\`

╭───────────────────⊷
*┋ ⬡ .ᴘᴏʀɴ*
*┋ ⬡ .ᴘᴏʀɴᴠɪᴅ*
╰───────────────────⊷${customMenu}

> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐃 𝐇 — ا 𝐘*`;

    const adOptions = {
        externalAdReply: {
            title: "© 𝐌𝐈𝐋𝐊𝐘 𝐗𝐌𝐃",
            body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴀʏᴀɴ",
            thumbnailUrl: "https://i.ibb.co/0pcQynJx/S7-upload.jpg",
            sourceUrl: config.channel,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    };

    const S7HaTeSY = path.join(
        process.cwd(),
        'SY',
        'menu.mp4'
    );

    return await SYHaTeReplayS7(
        {
            video: fs.readFileSync(S7HaTeSY),
            caption: menu,
            gifPlayback: true
        },
        adOptions
    );

}

module.exports = s_secret_7_MENU;