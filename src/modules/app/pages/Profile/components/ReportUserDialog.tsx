// Core
import React from "react";
// Form
import {useForm, Controller} from "react-hook-form";
// Styles
import styles from "./ReportUserDialog.module.css";
// Icons
import {MdReport} from "react-icons/all";
// Mui
import {styled} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useAppDispatch} from "@store/hooks";
import {reportUser} from "@store/user/userAsyncAction";

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

interface ReportUserDialogIProps {
    userId: string;
    isVisible: boolean;
}

type reportForm = {
    description: string;
};
const ReportUserDialog: React.FC<ReportUserDialogIProps> = ({userId, isVisible}) => {
    const dispatch = useAppDispatch();

    /// =========================== Report user ===========================
    const [openReportDialog, setOpenReportDialog] = React.useState(false);
    const handleClickOpenReportDialog = () => {
        setOpenReportDialog(true);
    };
    const handleCloseReportDialog = () => {
        setOpenReportDialog(false);
    };

    const {
        handleSubmit,
        formState: {errors},
        control,
    } = useForm<reportForm>();
        console.log(errors)

    const onSubmit = handleSubmit(async (data) => {
        await dispatch(reportUser({reportedId: userId, description: data.description}));
        setOpenReportDialog(false);
    });

    return (isVisible && (
            <div className={styles["ReportUserDialog"]}>

                <ReportUser variant="outlined" color="error" onClick={handleClickOpenReportDialog}>
                    Reportar usuario
                    <MdReport/>
                </ReportUser>

                <Dialog open={openReportDialog} onClose={handleCloseReportDialog}>

                    <DialogTitle>¿Estas seguro de reportar a este usuario?</DialogTitle>
                    <form onSubmit={onSubmit}>

                        <DialogContent>

                            <DialogContentText>
                                Por favor describe el motivo de tu reporte para que podamos dar una solución al
                                problema.
                            </DialogContentText>
                            <Controller
                                name={"description"}
                                control={control}
                                rules={{ required: true }}
                                render={({field: {onChange, value}}) => (
                                    <TextField
                                        onChange={onChange}
                                        value={value}
                                        required
                                        multiline
                                        autoFocus
                                        margin="dense"
                                        id="description"
                                        label="Descripción del reporte"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                    />
                                )}
                            />
                            {errors.description && <span className={"error"}>Por favor rellena este campo</span>}

                        </DialogContent>

                        <DialogActions>
                            <Button color="error" onClick={handleCloseReportDialog}>Cancelar</Button>
                            <Button type={"submit"} color="secondary" onClick={onSubmit}>Reportar</Button>
                        </DialogActions>
                    </form>


                </Dialog>
            </div>
        )
    );
};

export default ReportUserDialog;
