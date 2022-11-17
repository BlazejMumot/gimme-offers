import instance from "./axiosInstance";

const getStatistics = async () => {
  let response = await instance.get("DailyStatistics");
  return response.data;
};

const StatisticsService = {
  getStatistics,
};
export default StatisticsService;
