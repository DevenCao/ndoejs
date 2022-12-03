const os = require('os')

//info about current user
console.log(os.userInfo());


//methods returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime}s`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);