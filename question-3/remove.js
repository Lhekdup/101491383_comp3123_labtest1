const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);
    console.log('delete files ' , files);

    files.forEach(file => {
        fs.unlinkSync(path.join(logsDir, file));
    });

    fs.rmdirSync(logsDir);
    console.log('Logs directory removed successfully.');
} else {
    console.log('Logs directory does not exist.')
}