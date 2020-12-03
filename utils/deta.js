require("dotenv").config();

const { Deta } = require("deta");

const deta = Deta(process.env.DETA);
export const store = deta.Base("store");
