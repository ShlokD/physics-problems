const lightspeed = 299792458;

const convertMilesToMeters = miles => miles * 1609.34;

const convertHoursToSeconds = hours => hours * 60 * 60;

const convertInchesVolumetoCentimetersVolume = inches =>
  inches * 2.54 * 2.54 * 2.54;

const massToEnergy = mass => (mass * lightspeed * lightspeed).toString()

const formula = {
  convertMilesToMeters,
  convertHoursToSeconds,
  convertInchesVolumetoCentimetersVolume,
  massToEnergy
};

module.exports = formula;
