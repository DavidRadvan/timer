const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (typeof Number(args[i]) === "number" && Number(args[i]) > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(args[i] * 1000));
  }
}
