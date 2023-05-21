import tap from "tap";
import {
  reverseStringFirstSolution,
  reverseStringSecondSolution,
} from "../exercises/reverse-string.js";

tap.equal(reverseStringFirstSolution("Cat"), "taC");
tap.equal(reverseStringFirstSolution("The Daily Byte"), "etyB yliaD ehT");
tap.equal(reverseStringFirstSolution("civic"), "civic");

tap.equal(reverseStringSecondSolution("Cat"), "taC");
tap.equal(reverseStringSecondSolution("The Daily Byte"), "etyB yliaD ehT");
tap.equal(reverseStringSecondSolution("civic"), "civic");
