function solution(arr, delete_list) {
    return arr.filter((value)=>{
        return !delete_list.includes(value);
    })
}