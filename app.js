function logoSecond([n]){
    n = Number(n);
    let row = n + 1;
    let star = "*";
    for(i = 0; i < row; i++){
        let line = "";
        for(let col = 0; col < n - i; col++){
            line += "-";
        }
        let lineSec = "";
        for(let k = 0; k < i  ; k++){
          lineSec += "-".repeat(2);
        }
        console.log((line + star.repeat(n) + lineSec + star.repeat(n) + line.repeat(2) + star.repeat(n) + lineSec + star.repeat(n) + line).repeat(2));
    }
}

logoSecond([7]);
