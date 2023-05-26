import tap from "tap";
import { addBinary } from "../exercises/add-binary.js";

tap.equal(addBinary("100", "1"), "101");
tap.equal(addBinary("11", "1"), "100");
tap.equal(addBinary("1", "0"), "1");
