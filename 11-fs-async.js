const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt',
            `Here is the Result : ${first}, ${second}`,
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log('done with this task');
            }
        );
    });
});

console.log('starting next task');
            