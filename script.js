function mincost(arr) {
    // Sort the array in ascending order.
    arr.sort((a, b) => a - b);

    let totalCost = 0;

    // While there is more than one rope,
    // connect the two smallest ropes.
    while (arr.length > 1) {
        // Take the first two ropes and sum them.
        let cost = arr[0] + arr[1];
        
        // Add the cost to the total cost.
        totalCost += cost;
        
        // Remove the first rope.
        arr.shift();
        
        // Replace the second rope with the combined rope.
        arr[0] = cost;
        
        // Sort again so the smallest ropes are at the front.
        arr.sort((a, b) => a - b);
    }

    // Return the total cost after connecting all ropes.
    return totalCost;
}

module.exports = mincost;
