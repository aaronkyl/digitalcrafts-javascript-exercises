function tipAmount (billAmount, serviceLevel) {
    let withTip = {
        "good": 1.2,
        "fair": 1.15,
        "bad": 1.1
    };
    if (withTip.hasOwnProperty(serviceLevel)) {
        return billAmount * withTip[serviceLevel];
    } else {
        return "Unknown level of service. Use 'good', 'fair', or 'bad'.";
    }
}

console.log(tipAmount(10, 'good'));
console.log(tipAmount(10, 'fair'));
console.log(tipAmount(10, 'bad'));
console.log(tipAmount(10, 'test'));