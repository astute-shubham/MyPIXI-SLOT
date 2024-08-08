function getSpinResult() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['symbol1', 'symbol2', 'symbol3', 'symbol1', 'symbol2']); // Example response
        }, 1000);
    });
}

export { getSpinResult };
