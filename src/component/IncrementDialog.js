import { Dialog, Button } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";

function IncrementDialog(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Open
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <Button color="primary" variant="contained" onClick={()=>props.setCount()}>
          Increment
        </Button>
      </Dialog>
    </div>
  );
}
const mapDispatchToProps=(dispatch)=>{
  return{
    setCount:()=>{
      dispatch({
        type:'INCREMENT',
      })
    }
  }
}
export default connect(null,mapDispatchToProps)(IncrementDialog);
