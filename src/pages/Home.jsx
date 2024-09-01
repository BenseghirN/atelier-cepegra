import styled from "styled-components";
import stations from "../datas/stations.json";
import { ListItem, ListItemText } from "@mui/material";
import "../styles/Home.css";

const ListStations = styled.div`
  margin: 30px;
  padding: 60px 90px;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <ListStations>
        {stations.station.map(({ id, name, standardname }) => (
          <ListItem className="ac-stations" key={id} disableGutters>
            <ListItemText className="ac-station-item" primary={name} />
          </ListItem>
        ))}
      </ListStations>
    </>
  );
}

export default Home;
