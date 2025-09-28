

// patterns

function pattern1() {
    for (let i = 0; i < 4; i++) {
        let a = " "
        for (let j = 0; j < 4; j++) {
            a += "*"
        }
        console.log(a)
    }
}
pattern1()

function pattern2() {
    for (let i = 0; i < 4; i++) {
        let a = " "
        for (let j = 0; j < i + 1; j++) {
            a += "*"
        }
        console.log(a)
    }
}
pattern2()

function pattern3() {
    for (let i = 1; i < 5; i++) {
        let a = " "
        for (let j = 1; j <= i; j++) {
            a += j
        }
        console.log(a)
    }
}
pattern3()

function pattern4() {
    for (let i = 1; i < 5; i++) {
        let a = " "
        for (let j = 1; j <= i; j++) {
            a += i
        }
        console.log(a)
    }
}
pattern4()

function pattern5() {
    for (let i = 5; i < 6; i--) {
        let a = " "
        for (let j = 1; j <= i; j++) {
            a += j
        }
        console.log(a)
    }
}
pattern5()


function pattern6() {
    const n = 4
    for (let i = 1; i <= n; i++) {
        let a = ""
        for (let j = 0; j < n - i; j++) {
            a += " "
        }
        for (let k = 0; k < i; k++) {
            a += "*"
        }
        console.log(a)
    }
}
pattern6()


function pattern7() {
    const n = 6
    for (let i = 1; i <= n; i++) {
        let a = ""
        for (let j = 1; j <= i; j++) {
            if (j % 2 === 0) a += "0"
            else a+= "1"
        }
        console.log(a)
    }
}
pattern7()


function pattern8() {
    const n = 6
    let toggel = 1
    for (let i = 1; i <= n; i++) {
        let a = ""
        for (let j = 1; j <= i; j++) {
            a += toggel
            if (toggel === 0) toggel = 1
            else toggel = 0
        }
        console.log(a)
    }
}
pattern8()




