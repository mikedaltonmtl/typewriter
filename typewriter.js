const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {

  setTimeout(() => {

    const output = (i === sentence.length -1) ? sentence[i] + '\n' : sentence[i];
    process.stdout.write(output);

  }, i * 50);

}