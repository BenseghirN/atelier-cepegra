import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { departureList } from "../../datas/DepartureList";

function isStationInDepartureList(stationId) {
  return departureList.find((element) => {
    return element.stationinfo.id === stationId;
  });
}

function formatToLocalTime(unixTimeStamp) {
  const date = new Date(unixTimeStamp * 1000);
  let hour = date.getHours();
  let minute = date.getMinutes();
  return hour + ":" + minute;
}

function StationSummary(props) {
  const departures = departureList.find(
    (d) => d.stationinfo.id === props.stationId
  )?.departures;

  return (
    <>
      {isStationInDepartureList(props.stationId) ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Destination</b>
                </TableCell>
                <TableCell>
                  <b>Départ</b>
                </TableCell>
                <TableCell>
                  <b>Quai</b>
                </TableCell>
                <TableCell>
                  <b>Retard</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departures.departure.map((dep) => (
                <TableRow
                  key={dep.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {dep.station}
                  </TableCell>
                  <TableCell>{formatToLocalTime(dep.time)}</TableCell>
                  <TableCell>{dep.platform}</TableCell>
                  <TableCell>{dep.delay} min.</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  );
}

export default StationSummary;
