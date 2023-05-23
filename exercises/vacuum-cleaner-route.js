/**
 * Given a string representing the sequence of moves a robot vacuum makes,
 * return whether or not it will return to its original position.
 * The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
 */

export const vacuumCleanerRoute = (moves) => {
  const axis = [0, 0];

  for (let i = 0; i <= moves.length; i++) {
    switch (moves[i]) {
      case "L": {
        axis[0] -= 1;
        break;
      }
      case "R": {
        axis[0] += 1;
        break;
      }
      case "U": {
        axis[1] += 1;
        break;
      }
      case "D": {
        axis[1] -= 1;
        break;
      }
      default:
        break;
    }
  }

  if (axis[0] === 0 && axis[1] === 0) return true;
  else return false;
};
