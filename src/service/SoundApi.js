import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { baseApiUrl, getApi } from "./CommonApi";

/**
 * 曲一覧取得
 * @param {*} limit 取得件数
 * @returns 曲リスト
 */
export const useSoundList = (page) => {
  const { data, error } = useSWR(`${baseApiUrl}/getSoundList?page=${page}`, getApi);

  return {
    soundList: data,
    isLoading: !error && !data,
    isError: error,
  };
};

/**
 * 曲一覧取得(Infinity)
 * @param {*} limit 取得件数
 * @returns 曲リスト
 */
export const useSoundListInfinity = (pageSize) => {
  const pageSizeNum = pageSize ? pageSize : 10;
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (page) => `${baseApiUrl}/getSoundList?page=${page + 1}`,
    getApi
  );

  const soundList = data ? [].concat(...data) : [];
  const isLoading = !data && !error;
  const isLoadingMore = isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < pageSizeNum);

  return {
    soundList: soundList,
    isLoading,
    isError: error,
    size,
    setSize,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
  };
};

/**
 * 曲詳細取得
 * @param {string} slug スラッグ
 * @returns 曲詳細
 */
export const useSoundDetail = (slug) => {
  const url = `${baseApiUrl}/getSound?slug=${slug}`;
  const { data, error } = useSWR(url, getApi);

  return {
    sound: data,
    isLoading: !error && !data,
    isError: error,
  };
};
