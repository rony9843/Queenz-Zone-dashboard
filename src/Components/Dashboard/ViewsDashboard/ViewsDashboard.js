import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";

// English.
import en from "javascript-time-ago/locale/en";

TimeAgo.addDefaultLocale(en);

export default function ViewsDashboard() {
  const [viewsData, setViewsData] = useState([]);

  const timeAgo = new TimeAgo("en-US");

  // call function
  const [calFuntion, setCalFuntion] = useState(false);

  useEffect(() => {
    fetch("https://queenzzoneserver-production.up.railway.app/getVisitorInfo")
      .then((response) => response.json())
      .then((json) => {
        setViewsData(json);
        setCalFuntion(false);
      });
  }, [calFuntion]);

  setTimeout(() => {
    setCalFuntion(true);
  }, 1000);

  return (
    <div>
      <div className="p-2">
        <div class="pt-2 d-flex justify-content-between">
          {" "}
          <div>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              Activity
            </span>
          </div>
          <div>
            <div
              className="p-1 px-3"
              style={{
                backgroundColor: "#ff5959",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <span className="px-2"> Live</span>
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>

        <div
          className="mt-2 p-2"
          style={{ border: "3px solid #fec400", borderRadius: "10px" }}
        >
          <div>
            {viewsData
              .sort((a, b) =>
                b.vInfo.visitorInfo.time.localeCompare(a.vInfo.visitorInfo.time)
              )
              .map((vw) => (
                <div
                  className="p-2 mb-3 m-1"
                  style={{ border: "1px solid #fec400", borderRadius: "5px" }}
                >
                  <div>
                    <div
                      className="row"
                      style={{ fontWeight: "bold", color: "#fec400" }}
                    >
                      <div className="col-1">IPv4</div>
                      <div className="col-3">Email</div>
                      <div className="col-2">User Web Number</div>
                      <div className="col-1">city</div>
                      <div className="col-1">ctry code</div>
                      <div className="col-2">ctry name</div>
                      <div className="col-1">postal</div>
                      {vw.vInfo.visitorInfo.product !== "" && (
                        <div className="col-1">product</div>
                      )}
                    </div>
                    <div className="row">
                      <div className="col-1">{vw.vInfo.visitorInfo.IPv4}</div>
                      <div className="col-3">
                        {console.log(
                          "this is user infoooooooooo::: ",
                          vw.vInfo.visitorInfo.curentUserInfo.activeUserInfo
                        )}
                        {vw.vInfo.visitorInfo.curentUserInfo.activeUserInfo ===
                        "old"
                          ? vw.vInfo.visitorInfo.curentUserInfo.oldUserInfo
                              .email
                          : "----"}
                      </div>
                      <div className="col-2">
                        {vw.vInfo.visitorInfo.localVisitorNumber &&
                          vw.vInfo.visitorInfo.localVisitorNumber}
                      </div>
                      <div className="col-1">{vw.vInfo.visitorInfo.city}</div>
                      <div className="col-1">
                        {vw.vInfo.visitorInfo.country_code}
                      </div>
                      <div className="col-2">
                        {vw.vInfo.visitorInfo.country_name}
                      </div>
                      <div className="col-1">{vw.vInfo.visitorInfo.postal}</div>
                      {vw.vInfo.visitorInfo.product !== "" && (
                        <div className="col-1">
                          {" "}
                          {
                            <img
                              width={60}
                              src={
                                vw.vInfo.visitorInfo.product[0]
                                  .ProductImage[0][0].image[0]
                              }
                              alt=""
                            />
                          }
                        </div>
                      )}
                    </div>
                  </div>
                  <div class="pt-2 d-flex justify-content-between">
                    <div>
                      <span style={{ fontSize: "15px" }}>
                        {vw.vInfo.visitorInfo.time}
                      </span>
                    </div>
                    <div>
                      <span style={{ color: "gray", fontSize: "12px" }}>
                        {timeAgo.format(new Date(vw.vInfo.visitorInfo.time))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
