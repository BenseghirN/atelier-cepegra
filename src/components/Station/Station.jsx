import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StationSummary from "./StationSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { departureList } from "../../datas/DepartureList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function isStationInDepartureList(stationId) {
  return departureList.find((element) => {
    return element.stationinfo.id === stationId;
  });
}

function Station({ station }) {
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
    if (isExpanded && !isStationInDepartureList(station.id)) {
      setOpen(true);
    }
  };

  const isInDepartureList = isStationInDepartureList(station.id);

  return (
    <>
      <Accordion expanded={expanded} onChange={handleAccordionChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id={station.id}
        >
          <b>{station.name}</b>
        </AccordionSummary>
        <AccordionDetails>
          {isInDepartureList ? (
            <StationSummary stationId={station.id} />
          ) : (
            <Typography>Pas de train programmés</Typography>
          )}
        </AccordionDetails>
      </Accordion>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Erreur
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Pas de train programmés
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default Station;
