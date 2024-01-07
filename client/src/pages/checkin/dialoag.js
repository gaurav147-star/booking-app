import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dialoag = (props) => {
  //   console.log(props);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  //   console.log(open);

  const handleClose = () => {
    navigate("/");
    setOpen(false);
    props.setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
      Great! Your stay is confirmed.
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
        You will soon receive an email confirmation on gauravgupta9137@gmail.com
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Ok
        </Button>
        
      </DialogActions>
    </Dialog>
  );
};

export default Dialoag;
