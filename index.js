const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const reducer = (total, numberOfBats) => total + numberOfBats;

const totalBatteries = batteryBatches.reduce(reducer)