import { IDailyStatistics } from "../Types/DailyStatistics/IDailyStatistics";
import instance from "./axiosInstance";

const getStatistics = async (): Promise<IDailyStatistics[]> => {
  let response = await instance.get("DailyStatistics");
  return response.data;
};

const StatisticsService = {
  getStatistics,
};
export default StatisticsService;
