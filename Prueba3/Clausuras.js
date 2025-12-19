function createNum() {
    let num = 0

    return function addNum() {
        num++
        console.log(num);
    }
}

const num = createNum()

num()
num()
num()