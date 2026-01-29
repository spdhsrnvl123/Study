function solution(num_list) {
    const last = num_list.slice(-1)[0];
    const prev = num_list.slice(-2)[0];
    
    const newValue = last > prev ? last - prev : last * 2;
    num_list.push(newValue);
    
    return num_list;
}