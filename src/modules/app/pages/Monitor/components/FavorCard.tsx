// Core
import React from "react";
// Styles
import styles from "./FavorCard.module.css";
// Mui
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// Redux
import { useAppDispatch } from "@root/store/hooks";
import { matchAction } from "@root/store/match/matchAsyncAction";
//Router
import {Link} from "react-router-dom";

const labels: { [index: string]: string } = {
  0.5: '0.5 estrellas',
  1: '1.0 estrellas',
  1.5: '1.5 estrellas',
  2: '2.0 estrellas',
  2.5: '2.5 estrellas',
  3: '3.0 estrellas',
  3.5: '3.5 estrellas',
  4: '4.0 estrellas',
  4.5: '4.5 estrellas',
  5: '5.0 estrellas',
};
function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}
interface IProps {
  email: string;
  name: string;
  status: string;
  matchId: string;
  favor: {
    title: string;
    description: string;
    location: string;

  }

}
type matchAction = {
  matchId: string;
  option: string;
  comment?: string;
  rating?: number;
}
/**
 * Represents a card component for displaying favor information and actions.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.email - Email of the responsible person for the favor.
 * @param {string} props.name - Name of the responsible person.
 * @param {string} props.status - Current status of the favor.
 * @param {string} props.matchId - ID of the favor match.
 * @param {Object} props.favor - Object containing favor details.
 * @param {string} props.favor.title - Title of the favor.
 * @param {string} props.favor.description - Description of the favor.
 * @param {string} props.favor.location - Location of the favor.
 * @returns {JSX.Element} - Rendered component.
 */

const FavorCard: React.FC = ({
  email,
  name,
  status,
  matchId,
  favor: { title, description, location},
}: IProps) => {
// State for controlling dialog visibility
  const [openConfirm, setOpenConfirm] = React.useState<boolean>(false);
  const [openCancel, setOpenCancel] = React.useState<boolean>(false);
  const [openRaiting, setOpenRaiting] = React.useState<boolean>(false);
  // State for rating value and hover
  const [value, setValue] = React.useState<number>(2);
  const [hover, setHover] = React.useState<number | null>(-1);
  // State for comment
  const [comment, setComment] = React.useState<string>("");
  // Redux dispatch
  const dispatch = useAppDispatch();

/**
   * Handles the click event for confirming the favor completion.
   */
  const handleClickConfirm = ()=> {
    setOpenConfirm(!openConfirm);
  };
/**
   * Handles the click event for canceling the favor.
   */
  const handleClickCancel = () => {
    setOpenCancel(!openCancel);
  };
 /**
   * Handles the click event for opening the rating dialog.
   */
  const handleClickRaiting = () => {
    setOpenRaiting(!openRaiting);
  };

/**
   * Rejects the favor by dispatching a reject action.
   */

  const rejectFavor = () => {
    const data: matchAction = {
      matchId: matchId,
      option: "REJECT",
  }
  dispatch(matchAction(data));
  console.log("rejectFavor");
  setOpenCancel(false);
}
const finishFavor = () => {

  const data: matchAction = {
    matchId: matchId,
    option: "FINISH",
    comment: comment,
    rating: value,
  }

dispatch(matchAction(data));
console.log("finishFavor")
setOpenRaiting(false);
}
  return (
    <div className={styles["FavorCard"]}>
      <div className={styles["info"]}>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Estado:</h3>
        <span>{(status=="CREATED")?"Creado":"En espera"}</span>
        <h3>Ubicación:</h3>
        <span>{location}</span>
        <h3>Resspanonsable: </h3>
        <span>{name}</span>
        <h3>Correo: </h3>
        <Link to={`/user/${email}`}>{email}</Link>
      </div>
      <hr />
      <div className={styles["actions"]}>
        <button
          onClick={handleClickConfirm}
          className={styles["confirm"]}
          type={"button"}
        >
          {" "}
          Confirmar realización
        </button>
          <Dialog open={openConfirm} onClose={handleClickConfirm}>
            <DialogTitle>¿Fue finalizado el favor?</DialogTitle>

            <DialogActions>
              <Button color="error" onClick={handleClickConfirm}>
                Cancelar
              </Button>
              <Button
                color="secondary"
                onClick={function(event) {
                  handleClickConfirm();
                  handleClickRaiting();
                }}
              >
                {" "}
                Confirmar finalización
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={openRaiting} onClose={handleClickRaiting}>
            <DialogTitle>Califica tu experiencia</DialogTitle>
            <DialogContent
              sx={{
                display: "grid",
                gap: 2
              }}
            >
            <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "inherit",

                }}
              >
                <Rating
                  sx={{
                    justifySelf: "center",
                    height: 32,
                    alignItems: "center",
                  }}
                  size="large"
                  name="feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}

                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
              </Box>

            <DialogContentText>
                  Cuentanos acerca de tu experiencia con este favor.
                </DialogContentText>
                <TextField
                  multiline
                  autoFocus
                  margin="dense"
                  id="reason"
                  label="Observaciones"
                  type="text"
                  fullWidth
                  onChange={(event) => {
                    setComment(event.target.value);
                  }}
                  variant="standard"
                />
              </DialogContent>

            <DialogActions>

              <Button color="secondary" onClick={finishFavor}>
                {" "}
                Enviar
              </Button>
            </DialogActions>
          </Dialog>
        <button
          className={styles["cancel"]}
          type={"button"}
          onClick={handleClickCancel}
        >
          {" "}
          Cancelar realización
        </button>
          <Dialog open={openCancel} onClose={handleClickCancel}>
            <DialogTitle>¿Estas seguro de cancelar este favor?</DialogTitle>

            <DialogActions>
              <Button color="error" onClick={rejectFavor} >
                Cancelar favor
              </Button>
              <Button color="secondary" onClick={handleClickCancel}>
                Continuar con el favor
              </Button>
            </DialogActions>
          </Dialog>
      </div>
    </div>
  );
};

export default FavorCard;
