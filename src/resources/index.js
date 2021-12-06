import axios from "axios";
import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

const baseURL = "http://localhost:3001";

const resourcePaths = {
  facilitySubmissions: "/healthFacility/submissions",
  facilities: "/healthFacility",
  registeredPatientsSummaryMY: "/healthFacility/registeredPatientsSummary",
  registeredPatientsSummary: "/registeredPatientsSummary",
  aggregate: "/registeredPatientsSummary/category/aggregate",
};

export const useSubmissions = () => {
  return useQuery("submissions", async () => {
    const { data } = await axios.get(
      `${baseURL}${resourcePaths.facilitySubmissions}`
    );
    return data;
  });
};
export const useFacilities = () => {
  return useQuery("facilities", async () => {
    const { data } = await axios.get(`${baseURL}${resourcePaths.facilities}`);
    return data;
  });
};

export const getSummariesByFacilites = async (facilityId) => {
  console.log("facilityId", facilityId);
  const { data } = await axios.get(
    `${baseURL}${resourcePaths.registeredPatientsSummary}/${facilityId}`
  );
  return data;
};

export const useSummariesByFacility = (facilityId) => {
  return useQuery(
    ["facilitySummaries", facilityId],
    () => getSummariesByFacilites(facilityId),
    {
      enabled: !!facilityId,
    }
  );
};
export const getSummariesByMonth = async (monthYear) => {
  console.log("monthYear", monthYear);
  const { data } = await axios.get(
    `${baseURL}${resourcePaths.registeredPatientsSummaryMY}/${monthYear}`
  );
  return data;
};

export const useSummariesByMonth = (monthYear) => {
  return useQuery(
    ["facilitySummariesMonthYear", monthYear],
    () => getSummariesByMonth(monthYear),
    {
      enabled: !!monthYear,
    }
  );
};

export const getTotalBy = async (monthYear) => {
  console.log("monthYear", monthYear);
  const { data } = await axios.get(
    `${baseURL}${resourcePaths.registeredPatientsSummaryMY}/${monthYear}`
  );
  return data;
};

export const useAggregatedRecords = (monthYear) => {
  return useQuery(
    ["facilitySummariesMonthYear", monthYear],
    () => getTotalBy(monthYear),
    {
      enabled: !!monthYear,
    }
  );
};
