const dots = num => new Array(num).fill(".").join("")

const zero = num => new Array(num).fill("0").join(".")

/* console.log(dots(4))
console.log(zero(4)) */

const pattern = (size,offset = 0) =>{
    let output = []
    for(let i=0;i<size-offset;i++){
        output[i] = dots(size-i)+zero(i+1)+dots(size-i)
    }
    return output
}

const Inverse_pyramid = size =>pattern(size).reverse().join('\n')

const rhombus = size =>[...pattern(size,1),...pattern(size).reverse()].join('\n')

console.log(rhombus(4))