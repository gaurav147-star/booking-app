import React, { useState } from "react";
import {
  Tooltip,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  DialogContent,
  Button,
  TextareaAutosize,
  FormControl,
  Typography,
  ListItem,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../action/user-action";

const EditUser = (props) => {
  const [open, setOpen] = React.useState(false);
  const [adminAccess, setAdminAccess] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();

  const id = props.id;

  const handleUpdate = (e) => {
    dispatch(updateUser(adminAccess, id));
    setOpen(false);
    e.preventDefault();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Edit" arrow placement="top">
        <IconButton style={{ padding: "0px" }} onClick={handleClickOpen}>
          <EditOutlinedIcon style={{ margin: "0px 0px" }} />
        </IconButton>
      </Tooltip>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ backgroundColor: "green", color: "white" }}>
          <div style={{ display: "flex" }}>
            <ListItem>
              <EditOutlinedIcon />
              <Typography marginX="4px">Edit Reply</Typography>
            </ListItem>
            <IconButton style={{ color: "white" }} onClick={handleClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <FormControl style={{ margin: "20px" }}>
            <TextField
              id="outlined-size-small"
              size="small"
              variant="outlined"
              style={{ width: "150px" }}
              label="Name"
              value={adminAccess}
              onChange={(e) => setAdminAccess(e.target.value)}
            />
            <br />
          </FormControl>
        </DialogContent>
        <hr color="lightgrey" />
        <DialogActions>
          <FormControl style={{ margin: "20px" }}>
            <Button onClick={handleUpdate} variant="contained" color="success">
              Update
            </Button>
          </FormControl>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditUser;
