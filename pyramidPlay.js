const dots = num => new Array(num).fill(".").join("")

const zero = num => new Array(num).fill("0").join(".")

/* console.log(dots(4))
console.log(zero(4)) */

const pyramid = size =>{
    let output = []
    for(let i=0;i<size;i++){
        output[i] = dots(size-i)+zero(i+1)+dots(size-i)
    }
    return output.join("\n")
}


console.log(pyramid(4))