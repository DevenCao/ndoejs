const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', {encoding: 'utf8'}, (err, result)=>{
    if(err){
        console.log(err);
        return null
    }else{
        console.log(result);

        const first = result;
        readFile('./content/second.txt', 'utf8', (err, result)=>{
            if(err){
                console.log(err);
                return null;
            }else{
                writeFile('./content/result-async.txt', first + result, (err, result)=>{
                    if(err){
                        return null;
                    }else{
                        console.log(`result: ${result}`);
                    }
                })
            }
        })
    }
})