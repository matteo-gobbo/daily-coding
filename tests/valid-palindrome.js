import tap from "tap";
import { validPalindrome } from "../exercises/valid-palindrome.js";

tap.equal(validPalindrome("level"), true);
tap.equal(validPalindrome("algorithm"), false);
tap.equal(validPalindrome("A man, a plan, a canal: Panama."), true);
