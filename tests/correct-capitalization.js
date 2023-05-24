import tap from "tap";
import { correctCapitalization } from "../exercises/correct-capitalization.js";

tap.equal(correctCapitalization("USA"), true);
tap.equal(correctCapitalization("Calvin"), true);
tap.equal(correctCapitalization("compUter"), false);
tap.equal(correctCapitalization("coding"), true);
