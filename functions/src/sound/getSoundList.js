const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const { httpStatus } = require("../constants/commonConst");

const sounds = require("../../files/sounds.json");

/**
 * 曲リスト取得
 * @returns soundList [array[object]] 曲リスト
 */
const getSoundList = () =>
  functions.region("asia-northeast2").https.onRequest(async (req, res) =>
    cors(req, res, async () => {
      try {
        // クエリパラメータ取得
        const type = req.hasOwnProperty("query") && req.query.hasOwnProperty("type") ? req.query.type : "all";
        const page = req.hasOwnProperty("query") && req.query.hasOwnProperty("page") ? req.query.page : 1;

        // TODO：ページャーとフィルター

        let soundList = sounds;

        // ■■■ レスポンスの設定 ■■■
        res.status(httpStatus.ok).send(soundList);
      } catch (err) {
        functions.logger.error(err);
        res.status(httpStatus.badRequest).send("エラー発生： " + err);
      }
    })
  );

module.exports = getSoundList;
