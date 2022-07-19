const msg: string = "hello ni";

const speak = (msg: string) =>{
    return console.log(msg);
}

speak(msg);

const promise = new Promise((resolve,reject)=>{
    if(1){resolve(1)}
    if(0){reject(1)}
})

export{}