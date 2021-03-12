// Complete the countSwaps function below.
function countSwaps(a) {

    let swaps = 0;
    for (let i = 0; i < a.length; i++) {
    
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                swaps++;
            }
        }
        
    }
}

let a = [18, 80, 9, 31, 99, 1];
countSwaps(a);