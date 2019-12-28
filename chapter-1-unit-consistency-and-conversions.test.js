const formula = require("./formula");
const { makePoint } = require("./structures");

const convertToTwoDigits = num => parseFloat(num.toFixed(2));

describe("Practice Problems", () => {
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

  test("1.10", () => {
    const vectorD = formula.createVector(6, 3, -1);
    const vectorE = formula.createVector(4, -5, 8);
    const vectorProduct = formula.multiplyUnitVectors(vectorD, vectorE);
    expect(vectorProduct).toEqual(formula.createVector(19, -52, -42));
  });

  test("1.12", () => {
    const { x: AX, y: AY, z: AZ } = formula.getVectorComponents({ magnitude: 6, angle: 0});
    const { x: BX, y: BY, z: BZ } = formula.getVectorComponents({ magnitude: 4, angle: 30});

    const vectorA = formula.createVector(AX, AY, AZ);
    const vectorB = formula.createVector(BX, BY, BZ);
    const vectorC = formula.multiplyUnitVectors(vectorA, vectorB);
    expect(vectorC).toEqual(formula.createVector(0, 0, 12));
  });
})

describe("Exercises", () => {
  test("1.1", () => {
    const inchesInMile = 63360;
    const centimetersInMile = inchesInMile * 2.54;
    const kilometersInMile = centimetersInMile / 100000
    expect(convertToTwoDigits(kilometersInMile)).toEqual(1.61)
  });

  test("1.2", () => {
    const totalVolumeInLiters = 0.473;
    const totalVolumeInInches = totalVolumeInLiters * 1000 / Math.pow(2.54, 3);
    expect(convertToTwoDigits(totalVolumeInInches)).toEqual(28.86);
  });

  test("1.5", () => {
    const displacementInMeters = 327 * Math.pow(2.54, 3) / 1000;
    expect(convertToTwoDigits(displacementInMeters)).toEqual(5.36);
  });

  test("1.6", () => {
    const areaInFeet = 43600;
    const areaInMeters = areaInFeet * 0.3048 * 0.3048;
    const areaInHectares = areaInMeters / 10000;
    expect(convertToTwoDigits(areaInHectares)).toEqual(0.41)
  });

  test("1.7", () => {
    const timeInGigaseconds = Math.pow(10, 9);
    const secondsInAYear = 365 * 24 * 60 * 60;
    const yearsInGS = timeInGigaseconds / secondsInAYear;
    expect(convertToTwoDigits(yearsInGS)).toEqual(31.71)
  });

  test("1.8", () => {
    const furlongs = 180000;
    const fortnightToHours = 14 * 24;
    const furlongsToMiles = furlongs / 8;
    const speedInMiles = furlongsToMiles / fortnightToHours;
    expect(convertToTwoDigits(speedInMiles)).toEqual(66.96);
  })
});