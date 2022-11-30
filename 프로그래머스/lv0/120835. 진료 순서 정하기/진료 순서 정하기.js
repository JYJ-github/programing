function solution(emergency) {
    let copyEmergency = [];
    for (let i = 0; i < emergency.length; i++) {
        copyEmergency[i] = emergency[i];
    };

    copyEmergency.sort(function(a, b) {return b - a});

    let emergencyArray = [];
    for (let i = 0; i < emergency.length; i++) {
        for (let j = 0; j < copyEmergency.length; j++) {
            if (emergency[i] === copyEmergency[j]) {
                emergencyArray.push(j+1);
            }
        }
    }
    return emergencyArray;
}