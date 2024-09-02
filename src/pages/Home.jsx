import styled from "styled-components";
import stations from "../datas/stations.json";
import "../styles/Home.css";
import Station from "../components/Station/Station";

const ListStations = styled.div`
  margin: 30px;
  padding: 60px 90px;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <ListStations>
        {stations.station.map((station) => (
          <Station station={station} key={station.id} />
        ))}
      </ListStations>
    </>
  );
}

export default Home;
