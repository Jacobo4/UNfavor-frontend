// Core
import React from "react";
// Styles
import styles from "./ReportUserDialog.module.css";
// Icons
import {MdReport} from "react-icons/all";
// Mui
import {ThemeProvider, createTheme, styled } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ReportUser = styled(Button)({
    margin: "8px 0px",
    justify: "end",
    align: "end",
    width: "fit-content",
    "&:hover": {
        transform: "translateY(-0.2em)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.45)",
    },
});
const theme = createTheme({
    palette: {
        primary: {
            light: '#807cf6',
            main: '#615CF4',
            dark: '#4340aa',
            contrastText: '#fff',
        },
        secondary: {
            light: '#33dcb7',
            main: '#00D4A6',
            dark: '#009474',
            contrastText: '#000',
        },
        error: {
            light: '#ff7b83',
            main: '#FF5B64',
            dark: '#b23f46',
        }
    },
});
interface ReportUserDialogIProps {
    isVisible: boolean;
}
const ReportUserDialog: React.FC<ReportUserDialogIProps> = ({isVisible}) => {
/// =========================== Report user ===========================
    const [openReportDialog, setOpenReportDialog] = React.useState(false);
    const handleClickOpenReportDialog = () => {
        setOpenReportDialog(true);
    };
    const handleCloseReportDialog = () => {
        setOpenReportDialog(false);
    };

    return ( isVisible && (
            <div className={styles["ReportUserDialog"]}>

                <ReportUser variant="outlined" color="error" onClick={handleClickOpenReportDialog}>
                    Reportar usuario
                    <MdReport/>
                </ReportUser>

                <ThemeProvider theme={theme}>
                    <Dialog open={openReportDialog} onClose={handleCloseReportDialog}>

                        <DialogTitle>¿Estas seguro de reportar a este usuario?</DialogTitle>

                        <DialogContent>

                            <DialogContentText>
                                Por favor describe el motivo de tu reporte para que podamos dar una solución al
                                problema.
                            </DialogContentText>

                            <TextField
                                multiline
                                autoFocus
                                margin="dense"
                                id="reason"
                                label="Descripción del reporte"
                                type="text"
                                fullWidth
                                variant="standard"
                            />

                        </DialogContent>

                        <DialogActions>
                            <Button color="error" onClick={handleCloseReportDialog}>Cancelar</Button>
                            <Button color="secondary" onClick={handleCloseReportDialog}>Reportar</Button>
                        </DialogActions>

                    </Dialog>
                </ThemeProvider>
            </div>
        )
    );
};

export default ReportUserDialog;
