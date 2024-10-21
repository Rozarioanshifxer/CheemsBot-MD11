//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +94786802371
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"qNLvczmFuFZu9V8eKAaRrQrS4uW4I29IdqSj6qYR40k="},"public":{"type":"Buffer","data":"hk4zi9A1I1zVyQreST6Vr2Pr85jNOUgy80ia47xD7DM="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2MZQO7ImTvP3qbvAPZfwFBIlAsORUne9TKs/JD+Fv1E="},"public":{"type":"Buffer","data":"yLkTAa4fyno3frsCwU2sZxEVFRuQeG7l4toOf7mSMBc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"yARbzpTb7qpf5d2XPhXts7WPHVbn0JkmTmdmoTtfbFw="},"public":{"type":"Buffer","data":"1rMVI3Bz9FazmOsfBn6OabQBwtzA47nMOp1D+542WBY="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YFX5/Yq8rp9/A3qvRsdGNfB6L8Zzm5umUTib/vWcpWg="},"public":{"type":"Buffer","data":"84OtelcDLHxFBDK1/mwuqqZ3od7VpI59d9jrIOWZHDs="}},"signature":{"type":"Buffer","data":"Ekpj4S9dlKSvxcDLWYQrLAs5kb7us3IiRMPi9mTegiSXjyRi0WlxuJ2CsMpudVtLxaZP/7+F1IiSr5P10rQyBQ=="},"keyId":1},"registrationId":191,"advSecretKey":"6CZ/Kcc6oOpRh2nB2xDHShjYTK4xC6AvPVlgeOVJiks=","processedHistoryMessages":[{"key":{"remoteJid":"916282524515@s.whatsapp.net","fromMe":true,"id":"087F4CD4532CBE8BC56B8ED22FF7984B"},"messageTimestamp":1729491415},{"key":{"remoteJid":"916282524515@s.whatsapp.net","fromMe":true,"id":"FB618F55BE88D86D9F6C26C91ACE6B04"},"messageTimestamp":1729491418}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"SP0IRI5uSm-OE5I9Sb1b9Q","phoneId":"a6afed94-985f-41f4-9196-77936506fa82","identityId":{"type":"Buffer","data":"kkuCq7REP2apwjcGHhAFB/hJKqY="},"registered":true,"backupToken":{"type":"Buffer","data":"otEO/sXRaPcNKPbxIExueyUUZt0="},"registration":{},"pairingCode":"KX11TXC1","me":{"id":"916282524515:6@s.whatsapp.net","lid":"110569856176161:6@lid","name":"ANSHIF XER"},"account":{"details":"CM/PwdQFEM7j17gGGAEgACgA","accountSignatureKey":"5oSjlAktuZ+UklP5lvo4qRW899k3BZ1RAI5LIQagUEk=","accountSignature":"PGqfNIpcMrKb7Cg6kNihJf5SA+CJ9GW/NrAJgw6CZQtrHU3vxkh8TzqUdLneAE5o+NtaLPMn9cqqCNugn0DpCQ==","deviceSignature":"U+0QwgrejknmHVUP+KBjuteEmH0gVHtSdHBoh3bP3za2BAmsfLtValpvQYrd0nF6B5z03eMJFwW34c5bObUPAA=="},"signalIdentities":[{"identifier":{"name":"916282524515:6@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BeaEo5QJLbmflJJT+Zb6OKkVvPfZNwWdUQCOSyEGoFBJ"}}],"platform":"android","lastAccountSyncTimestamp":1729491409,"myAppStateKeyId":"AAAAAKaB"}'

//owmner v card
global.ytname = "YT: anshif_xer" //ur yt chanel name
global.socialm = "GitHub: Rozarioanshifxer" //ur github or insta name
global.location = "kerala palakkad" //ur location

//new
global.botname = 'ʀᴏᴢᴀʀɪᴏ-xᴇʀ BOT' //ur bot name
global.ownernumber = '916282524515' //ur owner number
global.ownername = 'ᴀɴsʜɪғ-xᴇʀ' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029EKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "ʀᴏᴢᴀʀɪᴏ-ᴀɴsʜɪғ-ᴛᴇᴀᴍ-official."
global.botscript = 'https://github.com/Rozarioanshifxer/CheemsBot-MD11' //script link
global.packname = "ʀᴏᴢᴀʀɪᴏ"
global.author = "ᴀɴsʜɪғ-xᴇʀ-official"
global.creator = "916282524515@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["916282524515"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '94,61' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
