function logoSecond([n]){
    n = Number(n);
    let row = n + 1;
    
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
    for(let i = 0; i < row / 2; i++){
        let line = "";
        for(let col = 0; col < n - i; col++){
            line += "-";
        }
        let lineNew = "-";
        let lineSec = n;
        let star = n;
        let starNew = "*";
        let lineSecMid = n-1;
        let secPart = ((n+1)/2)-1;
        let test = 1;
        for(let k = 0; k < i; k++){
          lineSec += 2;
          star += 2;
          lineSecMid = lineSecMid - 2;
          secPart -= 1;
          test += 2;
        }
        
        console.log(lineNew.repeat(secPart) + starNew.repeat(n) + "-".repeat(test) + starNew.repeat(n) + starNew.repeat(lineSecMid) + "-".repeat(test) + starNew.repeat(n) + lineNew.repeat(lineSecMid) + starNew.repeat(n) + "-".repeat(test) + starNew.repeat(n) + starNew.repeat(lineSecMid) + "-".repeat(test) + starNew.repeat(n) + lineNew.repeat(secPart));
    }

}

logoSecond([7]);
