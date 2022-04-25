/**
 * function名
 */
const functionNames = {
  getSoundList: "./src/sound/getSoundList",
  getSound: "./src/sound/getSound",
};

/**
 * httpステータス
 */
const httpStatus = {
  ok: 200,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
};

module.exports = {
  functionNames,
  httpStatus,
};
