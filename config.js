const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SUPUN-MD=vA9SzYxA#m0-tZTt_8WMo6aRiIAHJNlv18DMfI_dlmk2nqU0bzsU', //add your session id
MONGODB: process.env.MONGODB || "mongodb://mongo:bBSGMeBojEMPHMWWDvnyTrvswrOcSUDU@autorack.proxy.rlwy.net:15162", //add your mongodb url
 URL : process.env.BOT_MENU_LINKS || 'https://i.ibb.co/bHXBV08/9242c844b83f7bf9.jpg',
MAX_SIZE: 500
};

