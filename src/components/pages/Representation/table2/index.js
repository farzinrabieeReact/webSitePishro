import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { convertNumberToPersian } from "../../../method/convertDigitToEnglish";
import Styles from "./index.module.scss";

let useStyles = makeStyles((theme) => ({
  tableParent: {
    width: "100%",
    paddingBottom: 15,
  },
  table: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    "& tr": {
      "& :nth-child(odd)": {
        backgroundColor: "red",
      },
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "60%",
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
    borderRadius: 8,
    border: 0,
    outline: 0,
    padding: theme.spacing(2, 4, 3),
    position: "relative",
    paddingTop: 40,
    [theme.breakpoints.down("1000")]: {
      width: "80%",
    },
  },
}));

const Index = ({ columns, rows }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [iframeState, setiframeState] = useState({
    iframe: "",
    ind: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModalLocation = (iframe, ind) => {
    setiframeState({
      iframe: iframe,
      ind: ind,
    });
    if (iframe) handleOpen();
  };

  const hanldeLocation = () => {
    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {iframeState.iframe}
            <span
              style={{ position: "absolute", top: 10, left: 10, color: "red" }}
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </span>
          </div>
        </Fade>
      </Modal>
    );
  };

  // useEffect(() => {
  //   if (open) {
  //     hanldeLocation();
  //   }
  // }, [open]);

  return (
    <>
      <div className={`${classes.tableParent} table-responsive`}>
        <table className={Styles.table} id="listingTable">
          <thead>
            <tr>
              {columns.map((itm, ind) => (
                <th>{itm.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((itm, ind) => (
              <tr>
                {columns.map((info, index) => (
                  <>
                    {info.id !== "location" ? (
                      <td>{convertNumberToPersian(itm[info.id])}</td>
                    ) : (
                      <td>
                        <img
                          src={itm.location.icon}
                          alt=""
                          onClick={() =>
                            handleOpenModalLocation(itm.location.iframe, ind)
                          }
                          style={{cursor:'pointer'}}
                        />
                        {open && iframeState.ind === ind && hanldeLocation()}
                      </td>
                    )}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
