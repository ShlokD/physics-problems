const lightspeed = 299792458;

const convertMilesToMeters = miles => miles * 1609.34;

const convertHoursToSeconds = hours => hours * 60 * 60;

const convertInchesVolumetoCentimetersVolume = inches =>
  inches * 2.54 * 2.54 * 2.54;

const massToEnergy = mass => (mass * lightspeed * lightspeed).toString();

const calculateDistance = (pointA, pointB) => {
  const xSquare = Math.pow(pointA.x + pointB.x, 2);
  const ySquare = Math.pow(pointA.y + pointB.y, 2);
  return Math.sqrt(xSquare + ySquare);
};

const degreesToRadians = degrees => degrees * (Math.PI / 180);

const getVectorComponents = ({ magnitude, angle }) => {
  return { x: magnitude * Math.cos(degreesToRadians(angle)), y: magnitude * Math.sin(degreesToRadians(angle)) }
}

const formula = {
  convertMilesToMeters,
  convertHoursToSeconds,
  convertInchesVolumetoCentimetersVolume,
  massToEnergy,
  calculateDistance,
  getVectorComponents
};

module.exports = formula;