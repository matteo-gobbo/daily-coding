import tap from "tap";
import { example } from "../exercises/example.js";

tap.equal(example(1), "odd");
tap.equal(example(2), "even");
tap.equal(example(-3), "negative");
