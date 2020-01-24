// growingPlant Codesignal

// my solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  // initiatize currentHeight at 0 and dayCounter
  let currentHeight = 0;
  // days start at 1 not 0
  let dayCounter = 1;
  // loop and add upSpeed and substract downSpeed from currentHeight until currentHeight is desiredHeight
  while (currentHeight < desiredHeight) {
    // each iteration of loop counts as 1 day
    currentHeight = currentHeight + upSpeed;
    if (currentHeight >= desiredHeight) {
      break;
    }
    currentHeight = currentHeight - downSpeed;
    dayCounter += 1;
  }
  return dayCounter;
}

// better solution
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  return upSpeed > desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}
