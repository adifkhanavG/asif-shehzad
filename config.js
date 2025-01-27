const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    ALIVE_IMG: process.evn.ALIVE_IMG "https://qu.ax/pNurz.jpg"
  ALIVE_MSG:process.evn.ALIVE_MSG || "Hello iam alive"
};
