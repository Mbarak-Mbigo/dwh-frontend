import { useParams } from "react-router-dom";

import { useSummariesByMonth } from "../../resources";

const MonthlyYear = () => {
  const { monthyear } = useParams();
  const { status, data, error, isFetching } = useSummariesByMonth(monthyear);
  console.log("monthyear", monthyear);
  return (
    <div>
      {data && (
        <div>
          {data.data.map((record, index) => (
            <div key={`record-${index}`}>{JSON.stringify(record, null, 2)}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MonthlyYear;
