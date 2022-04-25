const { functionNames } = require("./src/constants/commonConst");

/**
 * loadFunctions
 * 各APIを登録
 * @param funcs [object] 登録するAPIの名前
 */
const loadFunctions = (funcs) => {
  for (const name in funcs) {
    if (!process.env.K_SERVICE || process.env.K_SERVICE === name) {
      exports[name] = require(funcs[name])();
    }
  }
};

// locadFunction実行
loadFunctions(functionNames);
