const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const { httpStatus } = require("../constants/commonConst");

const sounds = require("../../files/sounds.json");

/**
 * 曲詳細取得（スラッグ指定）
 * @returns sound [object] 曲詳細
 */
const getSound = () =>
  functions.region("asia-northeast2").https.onRequest(async (req, res) =>
    cors(req, res, async () => {
      try {
        // クエリパラメータ取得
        const slug = req.query["slug"];

        const sound = sounds.filter((m) => m.slug === slug);

        // ■■■ レスポンスの設定 ■■■
        res.status(httpStatus.ok).send(sound);
      } catch (err) {
        functions.logger.error(err);
        res.status(httpStatus.badRequest).send("エラー発生： " + err);
      }
    })
  );

module.exports = getSound;
