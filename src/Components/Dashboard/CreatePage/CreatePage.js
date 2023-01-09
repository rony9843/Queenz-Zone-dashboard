import Button from "@mui/material/Button";
import React, { useState } from "react";
import styled from "styled-components";

export default function CreatePage() {
  const [SNumber, setSNumber] = useState(
    Math.floor(Math.random() * 9000000000) + 1000000000
  );

  // page name
  const [Pname, setPName] = useState("");

  // submit btn
  const submit = () => {
    const createPage = {
      pageName: Pname,
      sName: SNumber,
      components: [],
    };

    fetch(
      "https://queenzzoneserver-production.up.railway.app/queenZoneCreatePage",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ createPage: createPage }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <TopBack>
      <div>
        <div>
          <div className="p-2">
            <div class="pt-2 d-flex justify-content-between">
              {" "}
              <div>
                <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                  Create Page
                </span>
              </div>
            </div>

            <div
              className="mt-2 p-2"
              style={{ border: "3px solid #fec400", borderRadius: "10px" }}
            >
              <div className="row">
                <div className="col-7">
                  <div class="mb-3">
                    <label for="pageName" class="form-label">
                      Page Name
                    </label>
                    <input
                      onChange={(e) => setPName(e.target.value)}
                      value={Pname}
                      type="email"
                      class="form-control"
                      id="pageName"
                      aria-describedby="pageName"
                    />
                  </div>
                </div>
                <div className="col-5">
                  <div class="mb-3">
                    <label for="pageId" class="form-label">
                      Page Id
                    </label>
                    <input
                      type="pageId"
                      class="form-control"
                      id="pageId"
                      aria-describedby="pageId"
                      disabled
                      value={SNumber}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div>
                    {" "}
                    <b>Components</b>{" "}
                  </div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quas, possimus! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Error at adipisci ex, libero ducimus fuga
                  quo ea reprehenderit suscipit eveniet labore a recusandae et
                  vel doloremque est voluptatem temporibus animi velit! Veniam
                  esse explicabo porro fuga non sint, error quos ratione vero
                  quia aliquam corrupti suscipit officia culpa dolorem amet
                  consequatur nulla est nostrum! Molestiae cumque, maxime sequi
                  quod tempora repudiandae, ipsum illum, voluptates odio odit
                  maiores assumenda cum quos! Ullam, in quisquam iure modi
                  laboriosam accusantium voluptatum aperiam nobis? Reiciendis
                  neque, sequi debitis rem asperiores quas, atque cumque quasi
                  architecto esse reprehenderit aspernatur quod? Porro
                  molestias, perspiciatis fugit voluptatibus nesciunt velit
                  deleniti in aliquid saepe repellendus mollitia nostrum
                  cupiditate, rerum, quaerat laborum debitis consectetur impedit
                  exercitationem placeat ratione non rem repellat? Maxime
                  ducimus voluptatem ipsa quis optio harum doloribus amet fugit
                  dolores iusto molestiae nostrum cumque veritatis odio magnam
                  dolore voluptate eaque quod, eveniet possimus id nulla
                  suscipit quibusdam ipsam! Facere eveniet, qui illum nam modi
                  a, et, placeat totam perferendis minima inventore! Quisquam
                  aliquam aliquid saepe doloribus! Et est quos voluptatibus
                  adipisci, sunt molestias laudantium accusantium voluptate
                  similique ipsa voluptates quas inventore ratione voluptatem
                  obcaecati officiis impedit harum ipsum molestiae odit quasi
                  accusamus libero? Corrupti tempora minus nihil a hic
                  cupiditate omnis, delectus cumque necessitatibus reiciendis
                  repudiandae officiis error, quo corporis rerum. Eos aliquid
                  eligendi perferendis quas aspernatur veniam similique
                  voluptates saepe delectus, odio, voluptas officia dolor sed
                  laudantium eaque asperiores nobis dignissimos! Natus, commodi
                  fugit esse iste molestias delectus quas repellendus impedit
                  iusto, repellat sit laborum quod aperiam possimus sed rem!
                  Veniam exercitationem tenetur distinctio rem sint. Explicabo,
                  vero dolores? Laborum iure, maxime eum, at culpa consequatur
                  ad velit officia placeat magni neque nobis asperiores et
                  expedita illo quae impedit dolores esse error vitae. Dolores,
                  molestias sed natus corrupti iusto quas itaque aliquid illo,
                  consectetur voluptatum magnam.
                </div>
                <div className="col-4">
                  <div>
                    {" "}
                    <b>Preview</b>{" "}
                  </div>
                  <div
                    className="p-2"
                    style={{
                      border: "1px solid #fec400",
                      borderRadius: "10px",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    fuga voluptatem, illum laboriosam atque suscipit! Voluptas
                    ipsa repellendus beatae fugit nobis aperiam esse odio odit
                    placeat tempore dolore distinctio dolorum quidem adipisci
                    possimus illo aut quod dignissimos modi quisquam nihil
                    pariatur, quis dolores! Delectus est fugit quam aliquam
                    libero, at quis accusamus magnam. Aut non atque illum
                    explicabo a ab id quas sunt saepe minima perferendis ex quae
                    fugiat quaerat ducimus earum error, molestiae quibusdam at
                    aspernatur. Nihil asperiores in ex inventore. Quos velit vel
                    praesentium dignissimos consectetur atque dolor possimus!
                    Repellendus, praesentium et! Magnam at temporibus molestias
                    tempore accusamus architecto natus aspernatur corrupti
                    tempora minus reiciendis facilis explicabo odio officiis,
                    nulla vel optio doloribus nisi inventore tenetur maxime vero
                    beatae ad. Voluptates maxime quae explicabo nam libero
                    deserunt sunt perspiciatis aperiam harum. Aliquid, provident
                    illum necessitatibus repudiandae totam dolore earum expedita
                    molestiae qui quo! Quisquam nihil ipsa ab atque incidunt
                    culpa maiores quo, vel animi optio. Quis, cumque ex quo
                    officia, doloremque dolor odit suscipit modi in maiores ea
                    sed fugiat? Cum nisi cupiditate eligendi voluptate provident
                    neque. Necessitatibus quibusdam aperiam quia voluptates, ab
                    quo possimus, dolore commodi nulla inventore sint illum
                    minima temporibus culpa repudiandae quam libero veniam!
                  </div>
                </div>
              </div>
              <div className="pt-2 d-flex justify-content-end">
                <Button
                  style={{ backgroundColor: "#FEC400", color: "black" }}
                  variant="contained"
                  onClick={() => submit()}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TopBack>
  );
}

const TopBack = styled.div``;
