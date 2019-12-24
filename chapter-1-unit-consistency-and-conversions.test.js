const formula = require("./formula");
const { makePoint } = require("./structures");

const convertToTwoDigits = num => parseFloat(num.toFixed(2));

describe("Converting Speed Units", () => {
  test("1.1", () => {
    const andyGreenSpeedInMiles = 763;
    const distanceInMiles = formula.convertMilesToMeters(andyGreenSpeedInMiles);
    const speedInSeconds = distanceInMiles / formula.convertHoursToSeconds(1);
    expect(convertToTwoDigits(speedInSeconds)).toEqual(341.09);
  });

  test("1.2", () => {
    const volumeOfDiamondInInches = 1.84;
    const volumeInCentimeters = formula.convertInchesVolumetoCentimetersVolume(
      volumeOfDiamondInInches
    );
    expect(convertToTwoDigits(volumeInCentimeters)).toEqual(30.15);
  });

  test("1.3", () => {
    const massOfElectron = 9.11 * Math.pow(10, -31);
    const energy = formula.massToEnergy(massOfElectron);
    expect(energy).toEqual("8.18765967829241e-14");
  });

  test("1.5", () => {
    const pointA = makePoint(0, 1);
    const pointB = makePoint(2, 0);
    const distance = formula.calculateDistance(pointA, pointB);
    expect(convertToTwoDigits(distance)).toEqual(2.24);
  });

  test("1.6-a", () => {
    const magnitude = 3;
    const angle = -45;
    const { x, y } = formula.getVectorComponents({ magnitude, angle });
    expect(convertToTwoDigits(x)).toEqual(2.12);
    expect(convertToTwoDigits(y)).toEqual(-2.12);
  });

  test("1.6-b", () => {
    const magnitude = 4.5;
    const angle = 53;
    const { x, y } = formula.getVectorComponents({ magnitude, angle });
    expect(convertToTwoDigits(x)).toEqual(2.71);
    expect(convertToTwoDigits(y)).toEqual(3.59);
  });

  test("1.7-a", () => {
    const vectorA = formula.getVectorComponents({ magnitude: 72.4, angle: 58 });
    const vectorB = formula.getVectorComponents({ magnitude: 57.3, angle: 216 });
    const vectorC = formula.getVectorComponents({ magnitude: 17.8, angle: 270 });

    const { distance } = formula.getVectorAddition([vectorA, vectorB, vectorC]);
    expect(convertToTwoDigits(distance)).toEqual(12.74);
  });

  test("1.7-b", () => {
    const vectorA = formula.getVectorComponents({ magnitude: 72.4, angle: 58 });
    const vectorB = formula.getVectorComponents({ magnitude: 57.3, angle: 216 });
    const vectorC = formula.getVectorComponents({ magnitude: 17.8, angle: 270 });

    const { angle } = formula.getVectorAddition([vectorA, vectorB, vectorC]);
    expect(convertToTwoDigits(angle)).toEqual(-51.14);
  });

  test("1.8", () => {
    const threeDimensionalDistance = formula.getVectorDistanceInThreeDimensions({ AX: -10.4, AY: 8.7, AZ: 2.1 });
    expect(convertToTwoDigits(threeDimensionalDistance)).toEqual(13.72);    
  });
  
  test("1.9", () => {
    const vectorD = formula.createVector(6, 3, -1);
    const vectorE = formula.createVector(4, -5, 8);
    const vectorSum = formula.addUnitVectors([formula.multiplyVectorByScalar(vectorD, 2), formula.multiplyVectorByScalar(vectorE, -1)]);
    const vectorMagnitude = formula.getVectorMagnitude(vectorSum);
    expect(convertToTwoDigits(vectorMagnitude)).toEqual(16.88);   
  });
});