import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
  IconButton,
  Button,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../action/user-action";

const DeleteUser = (props) => {
  const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const id = props.id;
//   console.log(id);
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteUser(id));
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="Delete" arrow placement="top">
        <IconButton style={{ padding: "0px" }} onClick={handleClickOpen}>
          <DeleteOutlineOutlinedIcon style={{ margin: "0px 0px" }} />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Are you sure?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once deleted, the action cannot be undone
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteUser;
