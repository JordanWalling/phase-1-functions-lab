// // Code your solution in this file!
// function distanceFromHqInBlocks(someValue) {
//   let blocks = 0;
//   if (someValue > 42) {
//     blocks = someValue - 42;
//     return blocks;
//   } else {
//     blocks = 42 - someValue;
//     return blocks;
//   }
// }

// function distanceFromHqInFeet(distance) {
//   distanceFromHqInBlocks(distance);
//   return distance * 264;
// }

// console.log(distanceFromHqInFeet(34));

function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  let block;
  if (someValue > hq) {
    block = someValue - hq;
  } else {
    block = hq - someValue;
  }
  return block;
}

function distanceFromHqInFeet(someValue) {
  let block = distanceFromHqInBlocks(someValue);
  return block * 264;
}

function distanceTravelledInFeet(start, destination) {
  let distance;
  if (start > destination) {
    distance = start - destination;
  } else {
    distance = destination - start;
  }
  return distance * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare;

  if (distance < 400) {
    fare = 0;
    return fare;
  } else if (distance >= 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
    return fare;
  } else if (distance > 2000 && distance < 2500) {
    fare = 25;
    return fare;
  } else if (distance >= 2500) {
    return "cannot travel that far";
  }
}
