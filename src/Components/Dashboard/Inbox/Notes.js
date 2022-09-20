import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Notes({ inboxRoom, text, setText }) {
  // ^ save notification
  const [notification, setNotification] = useState(false);

  const callNoti = () => {
    setNotification(true);
    setTimeout(alertFun, 3000);
  };

  const alertFun = () => {
    console.log("this is time for alert");
    setNotification(false);
  };

  // ^ for save
  const saveText = () => {
    fetch("https://glacial-shore-36532.herokuapp.com/queenZoneInboxNotes", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ room: inboxRoom, notes: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("this is save btn for fetch : ", data);
        setText(data.notes);

        callNoti();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // for auto save
  const [updateCount, setUpdateCount] = useState(1);

  useEffect(() => {
    setTimeout(function () {
      saveText();
      console.log("this is auto save function ", updateCount);
      setUpdateCount(updateCount + 1);
    }, 200000);
  }, [updateCount]);

  return (
    <div>
      <NotesEditorback>
        <div className="editor">
          <CKEditor
            editor={ClassicEditor}
            data={text}
            onChange={(event, editor) => {
              const data = editor.getData();
              setText(data);
            }}
          />
        </div>
        {/* <div>
          <h2>Content</h2>
          <p>{parse(text)}</p>
          <p>{text}</p>
        </div> */}
        <div className="pt-1">
          <span style={{ fontSize: "13px", color: "gray" }}>
            **Auto save will happen every 2 minutes**
          </span>
        </div>
        <div class="mt-1 d-flex justify-content-between">
          <div>
            <Button
              style={{ boxShadow: "none", backgroundColor: "#fec400" }}
              size="small"
              variant="contained"
            >
              Cancel
            </Button>
          </div>
          {notification === true && (
            <div
              className="p-1 px-5"
              style={{
                backgroundColor: "green",
                fontWeight: "bold",
                color: "white",
                borderRadius: "5px",
                fontSize: "13px",
              }}
            >
              Saved
            </div>
          )}

          <div>
            <Button
              onClick={() => saveText()}
              style={{ boxShadow: "none", backgroundColor: "#fec400" }}
              size="small"
              variant="contained"
            >
              Save
            </Button>
          </div>
        </div>
      </NotesEditorback>
    </div>
  );
}

const NotesEditorback = styled.div`
  .ck-rounded-corners .ck.ck-editor__main > .ck-editor__editable,
  .ck.ck-editor__main > .ck-editor__editable.ck-rounded-corners {
    background-color: #fff0c0;
    height: 345px;
    border-radius: 0px 0px 5px 5px;
    padding: 0px 5px;
    border: none;
  }
`;
