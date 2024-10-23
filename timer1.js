
const args = process.argv

const timer = function (args) {
  let time = 0
  const slice = args.slice(2);
  for (const value of slice){
    let num = Number(value);
    if (num >= 0) {
      num *= 1000;
      setTimeout(() => {
        process.stdout.write('.');
      }, num);
    }
    time = 0;
  }
};

timer(args);
