function FizzBuzz() {
    let r = [];
    for (let i = 1; i < 101; i += 1) {
        if (i % 3 === 0 && i % 5 === 0) {
            r.push("FizzBuzz");
            continue;
        }
        if (i % 3 === 0) {
            r.push("Fizz");
            continue;
        }
        if (i % 5 === 0) {
            r.push("Buzz");
            continue;
        } else {
            r.push(i);
        }
    }
    const ret = r.join("\n");
    console.log(ret);
    return ret;
}

exports.FizzBuzz = FizzBuzz;
