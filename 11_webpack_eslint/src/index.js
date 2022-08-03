const msg = `hello ni`;

const speak = (msg1) => {
  console.log(msg1);
};

speak(msg);

const promise = new Promise((resolve, reject) => {
  if (1) {
    resolve(1);
  }
  if (0) {
    reject(1);
  }
});

export default { promise };
