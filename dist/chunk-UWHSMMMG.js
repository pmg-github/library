import {
  serialize
} from "./chunk-QAY65XGT.js";

// node_modules/ohash/dist/crypto/node/index.mjs
import { createHash } from "crypto";
var e = globalThis.process?.getBuiltinModule?.("crypto")?.hash;
var r = "sha256";
var s = "base64url";
function digest(t) {
  if (e) return e(r, t, s);
  const o = createHash(r).update(t);
  return globalThis.process?.versions?.webcontainer ? o.digest().toString(s) : o.digest(s);
}

// node_modules/ohash/dist/index.mjs
function hash(input) {
  return digest(serialize(input));
}

export {
  digest,
  hash
};
