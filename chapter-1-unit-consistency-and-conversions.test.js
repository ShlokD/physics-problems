const formula = require("./formula");

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
});
