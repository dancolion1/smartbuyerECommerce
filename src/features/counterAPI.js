// A mock function to mimic the behavior of
export function fetchCount(amount =1){
    return new Promise((resolve) =>
      setTimeout(() => resolve({data: amount}), 500)  
)
}