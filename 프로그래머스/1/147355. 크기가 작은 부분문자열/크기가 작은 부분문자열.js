function solution(t, p) {
    const targetLength = p.length;
    const targetValue = Number(p);
    let count = 0;
    
    for(let i = 0; i <= t.length - targetLength; i++){
       let subString = t.slice(i,i+targetLength);
        if(Number(subString) <= targetValue) count++;
    }
    
    return count;
}