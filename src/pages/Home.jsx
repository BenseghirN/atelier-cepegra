import styled from "styled-components";
import stations from "../datas/stations.json";
import "../styles/Home.css";
import Station from "../components/Station/Station";

const ListStations = styled.div`
  margin: 30px;
  padding: 60px 90px;
  justify-content: center;
`;

const stationList = [...stations.station];
stationList.sort((a, b) => a.name.localeCompare(b.name));

function Home() {
  return (
    <>
      <ListStations>
        {stationList.map((station) => (
          <Station station={station} key={station.id} />
        ))}
      </ListStations>
    </>
  );
}

export default Home;
