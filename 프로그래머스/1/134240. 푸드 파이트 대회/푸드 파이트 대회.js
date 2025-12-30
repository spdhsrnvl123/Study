function solution(food) {
    let left = '';
    //인덱스 0번은 무조건 물로 사용되어야 해서 중간에 나야한다.
    for(let i=1; i<food.length; i++){
        let count = Math.floor(food[i]/2);
        left += String(i).repeat(count);
    }
    
    return left + "0" + left.split("").reverse().join("");
}