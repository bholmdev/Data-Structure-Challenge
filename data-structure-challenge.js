function challenge() {
    let challengeArray = [
        [false, true, false, false],
        [false, false, false, true],
        [false, false, false, false],
        [false, false, false, false]
    ];

    for (let array = 0; array < challengeArray.length; array++) {
        for (index = 0; index < challengeArray[array].length; index++) {
            if (challengeArray[array][index] === false) {
                challengeArray[array][index] = true;
            }
        }
    }
    console.log(challengeArray);
}
challenge();