// 👈 You Can change this your choice
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🤍'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*ɢᴜʀᴇɴ  Ξ*
*I am 18 years old developer...*
*From 🇩🇿🤍🇪🇬🇰*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Instagram - https://www.instagram.com/itz.guren/*`  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+966569508709'] //👈  Enter Your number
global.premium =  ['+966569508709,+201551723355'] //👈  Enter Your number
global.ownernomer = '++966569508709,+201551723355' //👈  Enter Your number
global.ownername = 'ɢᴜʀᴇɴ' //👈 Enter Your name
global.botname = 'ɢᴜʀᴇɴ ʙᴏᴛ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ɢᴜʀᴇɴ ʙᴏᴛ' //👈 Enter Your Name
global.myweb = 'https://www.instagram.com/itz.guren/'// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye we will miss u 🐼*' // 👈 You Can change this your choice
global.packname = 'ɢᴜʀᴇɴ ʙᴏᴛv8'  // 👈 You Can change this your choice 
global.author = 'ɢᴜʀᴇɴ' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  '[url=https://imgbb.com/][img]https://i.ibb.co/bsSqBq2/572ab7bc9ae43a6b23d3dc440143ff4a.jpg[/img][/url]' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'Done 🦋', // 👈 You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // 👈 You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // 👈 You Can change this your choice
    group: 'Feature Used Only For Groups!', // 👈 You Can change this your choice
    private: 'Features Used Only For Private Chat!', // 👈 You Can change this your choice
    bot: 'This Feature Is Only For Bot', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! Maybe Api Key Is Expired🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
// Do Not Change 👇 
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
