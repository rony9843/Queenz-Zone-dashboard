import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TimeAgo from "javascript-time-ago";
import * as React from "react";

// English.
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ setEditModalHtml, dt, btn }) {
  // ? modal on of
  const [open, setOpen] = React.useState(false);
  const EditModalhandleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditModalHtml(false);
  };

  console.log(dt);

  React.useEffect(() => {
    EditModalhandleOpen();
  }, []);

  // message on change
  const [editMessage, setEditMessage] = React.useState("");

  // ^ submit edit product
  const submitEditMessage = () => {
    if (editMessage !== "" && editMessage !== dt.message.message) {
      fetch(
        "https://queenzzoneserver-production.up.railway.app/queenZoneInboxEditMessage",
        {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: dt._id, newMessage: editMessage }),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setOpen(false);
          setEditModalHtml(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  // ^ for message delete
  const editmessageDelete = () => {
    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneInboxEditDeleteMessage",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: dt._id }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setOpen(false);
        setEditModalHtml(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div class="d-flex justify-content-between align-items-end">
              <div>
                {btn === "image"
                  ? "Delete Image"
                  : btn === "message"
                  ? "Edit Message"
                  : "Delete Product"}
              </div>
              <div>
                <span style={{ color: "gray", fontSize: "14px" }}>
                  {timeAgo.format(new Date(dt.message.time))}
                </span>
              </div>
            </div>
          </Typography>
          <div className="d-flex justify-content-between ">
            <div>
              Date : {new Date(dt.message.time).getDate()}/
              {new Date(dt.message.time).getMonth()}/{" "}
              {new Date(dt.message.time).getFullYear()}
            </div>
            <div>
              Time : {new Date(dt.message.time).getHours()}:
              {new Date(dt.message.time).getMinutes()}:
              {new Date(dt.message.time).getSeconds()}
            </div>{" "}
          </div>
          <Typography
            style={{
              backgroundColor: "#fff6cd",
              borderRadius: "5px",
              padding: "5px",
            }}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            {btn === "image" ? (
              "Delete Image"
            ) : btn === "message" ? (
              <div>
                <Input
                  style={{ width: "100%" }}
                  defaultValue={dt.message.message}
                  onChange={(e) => {
                    setEditMessage(e.target.value);
                  }}
                />
                <div className=" mt-2 d-flex justify-content-between">
                  <div>
                    {" "}
                    <Button
                      onClick={() => {
                        setOpen(false);
                        setEditModalHtml(false);
                      }}
                      style={{ boxShadow: "none", backgroundColor: "#fec400" }}
                      size="small"
                      variant="contained"
                    >
                      Cancel
                    </Button>
                  </div>

                  <div>
                    {" "}
                    <Button
                      style={{ boxShadow: "none", backgroundColor: "#fec400" }}
                      size="small"
                      variant="contained"
                      onClick={() => submitEditMessage()}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              "Delete Product"
            )}
          </Typography>
          <div>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="mt-2"
                style={{
                  backgroundColor: "rgb(255 0 0)",
                  border: "none",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                <Typography>Delete Message</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div class="d-flex justify-content-between">
                    <div>
                      <Button
                        onClick={() => {
                          setOpen(false);
                          setEditModalHtml(false);
                        }}
                        style={{
                          boxShadow: "none",
                          backgroundColor: "#fec400",
                        }}
                        size="small"
                        variant="contained"
                      >
                        Cancel
                      </Button>
                    </div>
                    <div>
                      <Button
                        onClick={() => {
                          editmessageDelete();
                        }}
                        style={{
                          boxShadow: "none",
                          backgroundColor: "red",
                        }}
                        size="small"
                        variant="contained"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
