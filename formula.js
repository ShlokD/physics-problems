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

const radiansToDegrees = radians => (radians * 180) / Math.PI;

const getVectorComponents = ({ magnitude, angle }) => {
  return {
    x: magnitude * Math.cos(degreesToRadians(angle)),
    y: magnitude * Math.sin(degreesToRadians(angle))
  };
};

const getVectorAddition = vectors => {
  const xDistance = vectors.reduce(
    (xDistance, currentVector) => (xDistance += currentVector.x),
    0
  );
  const yDistance = vectors.reduce(
    (yDistance, currentVector) => (yDistance += currentVector.y),
    0
  );

  return {
    distance: Math.sqrt(xDistance * xDistance + yDistance * yDistance),
    angle: radiansToDegrees(Math.atan(yDistance / xDistance))
  };
};

const getVectorDistanceInThreeDimensions = ({ AX, AY, AZ }) =>
  Math.sqrt(AX * AX + AY * AY + AZ * AZ);

const createVector = (x, y, z) => ({ x, y, z });

const multiplyVectorByScalar = (vector, scalar) =>
  createVector(scalar * vector.x, scalar * vector.y, scalar * vector.z);

const getVectorMagnitude = vector =>
  Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);

const addUnitVectors = vectors => {
  const newVectorX = vectors.reduce(
    (vectorSumX, vector) => (vectorSumX += vector.x),
    0
  );
  const newVectorY = vectors.reduce(
    (vectorSumY, vector) => (vectorSumY += vector.y),
    0
  );
  const newVectorZ = vectors.reduce(
    (vectorSumZ, vector) => (vectorSumZ += vector.z),
    0
  );

  return createVector(newVectorX, newVectorY, newVectorZ);
};

const formula = {
  convertMilesToMeters,
  convertHoursToSeconds,
  convertInchesVolumetoCentimetersVolume,
  massToEnergy,
  calculateDistance,
  getVectorComponents,
  getVectorAddition,
  getVectorDistanceInThreeDimensions,
  createVector,
  multiplyVectorByScalar,
  getVectorMagnitude,
  addUnitVectors
};

module.exports = formula;
