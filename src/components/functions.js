
import {colors} from "./Benefits"
function RoundFunc(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const getColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const getSwing = () => {
  return RoundFunc(5, 12);
};
const getDelay = () => {
  return RoundFunc(200, 2000);
};
const getFall = () => {
  return RoundFunc(-26, 26);
};

export {RoundFunc, getColor, getSwing, getDelay, getFall};