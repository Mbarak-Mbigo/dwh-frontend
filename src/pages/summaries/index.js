import * as React from "react";
import { useParams } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSummariesByFacility } from "../../resources";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const Summaries = () => {
  const { facilityCode } = useParams();

  const { status, data, error, isFetching } =
    useSummariesByFacility(facilityCode);

  const formatData = (summaryData) => {
    const tableData = summaryData.map((summary) => ({
      month: `${summary.month} ${summary.year}`,
      male: summary.dataSummary.male,
      female: summary.dataSummary.female,
      ...summary.dataSummary.ageGroupsData,
    }));

    return tableData;
  };

  const createHeaders = (formattedTdata) => {
    if (formattedTdata.length) {
      return Object.keys(formattedTdata[0]);
    }
    return [];
  };

  const createTData = (formattedTdata) => {
    if (formattedTdata.length) {
      const subformatted = formattedTdata.map((tableData) => {
        return {
          ...Object.values(tableData),
        };
      });
      return subformatted.map((row) => Object.values(row));
    }
    return [];
  };

  return (
    <TableContainer component={Paper}>
      {data && data.data && (
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {createHeaders(formatData(data.data) || []).map(
                (header, index) => (
                  <StyledTableCell key={`header-${index}`} align="right">
                    {header}&nbsp;
                  </StyledTableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {createTData(formatData(data.data) || []).map((row, index) => (
              <StyledTableRow key={`row-${index}`}>
                {row.map((cellData, index) => (
                  <StyledTableCell key={`cell-${index}`} align="right">
                    {cellData}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default Summaries;
