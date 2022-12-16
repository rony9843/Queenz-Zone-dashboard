import React from "react";
import styled from "styled-components";

export default function GraphicDesignOption({
  optionSelectState,
  BrushIcon,
  optionSelect,
}) {
  return (
    <GraphicDesignOptionStyle>
      <div
        className="GraphicDesign "
        onClick={() => optionSelect("GraphicDesign")}
        style={{
          padding: `${optionSelectState === "GraphicDesign" ? "4px" : "4px"}`,
        }}
      >
        <div
          class="d-flex justify-content-start p-2 mainGraphicDesign"
          style={{
            height: "35px",
            cursor: "pointer",

            backgroundColor: ` ${
              optionSelectState === "GraphicDesign"
                ? " rgb(255 240 128 / 60%)"
                : "rgb(254, 196, 0)"
            }  `,
          }}
        >
          <div>
            <BrushIcon />
          </div>
          <div className="fw-bold" style={{ marginLeft: "10px" }}>
            Graphic Design
          </div>
        </div>
      </div>{" "}
    </GraphicDesignOptionStyle>
  );
}

const GraphicDesignOptionStyle = styled.div``;
