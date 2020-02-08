function logoMentorMate(n){
    n = Number(n);
    let row = n + 1;

    if(n > 2 && n < 10000 && n % 2 != 0){
        //first half
        for(let i = 0; i < row / 2; i++){
            let line = "";
            for(let col = 0; col < n - i; col++){
                line += "-";
            }
            let lineSec = n;
            let star = n;
            let lineSecMid = n;
            for(let k = 0; k < i; k++){
                lineSec -= 2;
                star += 2;
                lineSecMid -= 1;
            }
            console.log(line + "*".repeat(star) + "-".repeat(lineSec) + "*".repeat(star) + "-".repeat(lineSecMid*2) + "*".repeat(star) + "-".repeat(lineSec) + "*".repeat(star) + line);
        }
        //second half
        for(let i = 0; i < row / 2; i++){
            let line = "-";
            let star = "*";
            let lineSecMid = n-1;
            let secPart = ((n+1)/2)-1;
            let bottomStar = 1;
            for(let k = 0; k < i; k++){
                lineSecMid -= 2;
                secPart -= 1;
                bottomStar += 2;
            }
            console.log(line.repeat(secPart) + star.repeat(n) + "-".repeat(bottomStar) + star.repeat(n) + star.repeat(lineSecMid) + "-".repeat(bottomStar) + star.repeat(n) + line.repeat(lineSecMid) + star.repeat(n) + "-".repeat(bottomStar) + star.repeat(n) + star.repeat(lineSecMid) + "-".repeat(bottomStar) + star.repeat(n) + line.repeat(secPart));
        }
    } else{
        console.log("Insert odd number between 2 and 10000!");
    }
}

logoMentorMate(9);
