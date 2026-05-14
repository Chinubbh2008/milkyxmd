// SY/play.js

const axios = require('axios');
const yts = require('yt-search');

async function S7_PLAY({

    text,
    prefix,

    SYHaTeReplay,

    log

}) {

    if (!text) {

        return await SYHaTeReplay(
            `❌ *Please provide a name!*\nExample: ${prefix}play Tu Hai Kahan`
        );

    }

    try {

        const search = await yts(text);

        const video = search.videos[0];

        if (!video) {

            return await SYHaTeReplay(
                "❌ Sorry, I did not find that song!"
            );

        }

        await SYHaTeReplay(

            `🎵 *Found:* ${video.title}\n⏱️ *Duration:* ${video.timestamp}\n📺 *Channel:* ${video.author.name}`,

            {
                contextInfo: {
                    externalAdReply: {
                        title: "𝑨𝑼𝑫𝑰𝑶 𝑷𝑳𝑨𝒀𝑬𝑹",
                        body: "Join our Channel for Updates!",
                        mediaType: 1,
                        thumbnailUrl: video.thumbnail,
                        sourceUrl: "https://sayan.is-a.dev",
                        renderLargerThumbnail: true
                    }
                }
            }

        );

        let audioUrl = null;

        try {

            const res1 = await axios.get(

                `https://social-media-downloader-api-s7.onrender.com/audiosyhate?url=${encodeURIComponent(video.url)}`,

                {
                    timeout: 60000,
                    maxContentLength: Infinity
                }

            );

            if (
                res1.data &&
                (
                    res1.data.status === "success" ||
                    res1.data.audio_url
                )
            ) {

                audioUrl = res1.data.audio_url;

            }

        } catch (e) {

            log(
                'error',
                'DOWNLOADER',
                'S7 API Timeout, trying Fallback...'
            );

        }

        if (!audioUrl) {

            try {

                const res2 = await axios.get(

                    "https://newapi-rypa.onrender.com/api/song?url=" +
                    encodeURIComponent(video.url),

                    {
                        timeout: 30000
                    }

                );

                if (
                    res2.data?.status &&
                    res2.data?.result?.audio
                ) {

                    audioUrl = res2.data.result.audio;

                }

            } catch (e) {

                log(
                    'error',
                    'DOWNLOADER',
                    `All APIs Failed: ${e.message}`
                );

            }

        }

        if (!audioUrl) {

            return await SYHaTeReplay(
                "❌ Download failed. Servers are busy."
            );

        }

        await SYHaTeReplay(

            {
                audio: {
                    url: audioUrl
                },
                mimetype: 'audio/mpeg',
                fileName: `${video.title}.mp3`
            },

            {
                externalAdReply: {
                    title: video.title,
                    body: "",
                    thumbnailUrl: video.thumbnail,
                    sourceUrl: "https://sayan.is-a.dev",
                    mediaType: 1
                }
            }

        );

    } catch (err) {

        log(
            'error',
            'SYSTEM',
            `Command Error: ${err.message}`
        );

    }

}

module.exports = S7_PLAY;