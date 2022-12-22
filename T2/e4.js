const matriz =  [[1,2,3],
            [4,5,6],
            [7,8,9]
        ];
let pos1 = matriz[0][0]
let rest = (matriz[0][0] + matriz[1][1] + matriz[2][2]) / 3
 console.log(`El promedio de la diagonal principal es ${rest}`);
 console.log(pos1);

for(let i = 0; i <= matriz.length; i++){
    for(let j = i; j <= i; j++){
        var suma =+ matriz[i][j]
    } 
}
rest = suma /3
console.log(rest);

