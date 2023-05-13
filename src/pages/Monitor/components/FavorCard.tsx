// Core
import React from "react";
// Styles
import styles from "./FavorCard.module.css";
// Mui
import {
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";

const theme = createTheme({
  palette: {
    primary: {
      light: "#807cf6",
      main: "#615CF4",
      dark: "#4340aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33dcb7",
      main: "#00D4A6",
      dark: "#009474",
      contrastText: "#000",
    },
    error: {
      light: "#ff7b83",
      main: "#FF5B64",
      dark: "#b23f46",
    },
  },
});
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
  title: string;
  description: string;
  state: string;
  limitDate: string;
  responsable: string;
}
const FavorCard: React.FC = ({
  title,
  description,
  state,
  limitDate,
  responsable,
}: IProps) => {
  const [openConfirm, setOpenConfirm] = React.useState<boolean>(false);
  const [openCancel, setOpenCancel] = React.useState<boolean>(false);
  const [openRaiting, setOpenRaiting] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState<number | null>(-1);
  const handleClickOpenConfirm = (): void=> {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = (): void => {
    setOpenConfirm(false);
  };
  const handleClickOpenCancel = (): void => {
    setOpenCancel(true);
  };

  const handleCloseCancel = (): void => {
    setOpenCancel(false);
  };
  const handleClickOpenRaiting = (): void => {
    setOpenRaiting(true);
  };

  const handleCloseRaiting = (): void => {
    setOpenRaiting(false);
  };
  return (
    <div className={styles["FavorCard"]}>
      <div className={styles["info"]}>
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Estado:</span>
        <p>{state}</p>
        <span>Fecha limite:</span>
        <p>{limitDate}</p>
        <span>Responsable: </span>
        <p>{responsable}</p>
      </div>
      <hr />
      <div className={styles["actions"]}>
        <button
          onClick={handleClickOpenConfirm}
          className={styles["confirm"]}
          type={"button"}
        >
          {" "}
          Confirmar realización
        </button>
        <ThemeProvider theme={theme}>
          <Dialog open={openConfirm} onClose={handleCloseConfirm}>
            <DialogTitle>¿Fue finalizado el favor?</DialogTitle>

            <DialogActions>
              <Button color="error" onClick={handleCloseConfirm}>
                Cancelar
              </Button>
              <Button
                color="secondary"
                onClick={function(event) {
                  handleCloseConfirm();
                  handleClickOpenRaiting();
                }}
              >
                {" "}
                Confirmar finalización
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={openRaiting} onClose={handleCloseRaiting}>
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
               
                  variant="standard"
                />
              </DialogContent>
            
            <DialogActions>
              
              <Button color="secondary" onClick={handleCloseRaiting}>
                {" "}
                Enviar
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
        <button
          className={styles["cancel"]}
          type={"button"}
          onClick={handleClickOpenCancel}
        >
          {" "}
          Cancelar realización
        </button>
        <ThemeProvider theme={theme}>
          <Dialog open={openCancel} onClose={handleCloseCancel}>
            <DialogTitle>¿Estas seguro de cancelar este favor?</DialogTitle>

            <DialogActions>
              <Button color="error" onClick={handleCloseCancel}>
                Cancelar favor
              </Button>
              <Button color="secondary" onClick={handleCloseCancel}>
                Continuar con el favor
              </Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default FavorCard;
