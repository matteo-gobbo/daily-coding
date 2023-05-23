import tap from "tap";
import { vacuumCleanerRoute } from "../exercises/vacuum-cleaner-route.js";

tap.equal(vacuumCleanerRoute("LR"), true);
tap.equal(vacuumCleanerRoute("URURD"), false);
tap.equal(vacuumCleanerRoute("RUULLDRD"), true);
