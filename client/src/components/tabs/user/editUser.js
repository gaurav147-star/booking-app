import React, { useState } from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogActions,
  TextField,
  DialogContent,
  Button,
  FormControl,
  Typography,
  ListItem,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../action/user-action";

const EditUser = (props) => {
  const [open, setOpen] = React.useState(false);
  const [adminAccess, setAdminAccess] = useState("");
  const dispatch = useDispatch();

  const id = props.id;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const handleClose = (e) => {
    dispatch(updateUser(adminAccess, id));
    setOpen(false);
    e.preventDefault();
  };

  return (
    <>
      <Tooltip title="Edit" arrow placement="top">
        <IconButton style={{ padding: "0px" }} onClick={handleClickOpen}>
          <EditOutlinedIcon style={{ margin: "0px 0px" }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogTitle style={{ backgroundColor: "rgb(2, 0, 36)", color: "white" }}>
          <div style={{ display: "flex" }}>
            <ListItem>
              <AddIcon />
              <Typography marginX="4px">Edit a Member</Typography>
            </ListItem>
            <IconButton style={{ color: "white" }} onClick={handleClickClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <FormControl sx={{ mt: 2 }} fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Role for member
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              fullWidth
              label="select role for member"
              value={adminAccess}
              onChange={(value) => setAdminAccess(value.target.value)}
            >
              <MenuItem value="true">Owner</MenuItem>
              <MenuItem value="false">User</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <hr color="lightgrey" />
        <DialogActions>
          <FormControl style={{ margin: "20px" }}>
            <Button onClick={handleClose} variant="contained" style={{ backgroundColor: "rgb(2, 0, 36)", color: "white" }} >
              Update
            </Button>
          </FormControl>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditUser;
