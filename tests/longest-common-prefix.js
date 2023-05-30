import tap from "tap";
import { longestCommonPrefix } from "../exercises/longest-common-prefix.js";

tap.equal(longestCommonPrefix(["colorado", "color", "cold"]), "col");
tap.equal(longestCommonPrefix(["a", "b", "c"]), "");
tap.equal(longestCommonPrefix(["spot", "spotty", "spotted"]), "spot");
