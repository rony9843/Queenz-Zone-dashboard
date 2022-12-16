import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function PreviousSection({
  fetchAllData,
  deleteData,
  updateData,
}) {
  return (
    <div className="row mt-2">
      {fetchAllData.map((dt) => (
        <div className="col-4">
          <div className="d-flex justify-content-between">
            <div>
              <span>{dt.componentsSection.Name}</span>
            </div>
            <div>
              <span>{dt.componentsSection.id}</span>
            </div>
          </div>
          <div>
            <Carousel
              className="mt-1 mb-1"
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={dt.componentsSection.Interval}
            >
              {dt.componentsSection.link.map((img) => (
                <div>
                  <img
                    src={
                      img.mobileLink === "" ? img.desktopLink : img.mobileLink
                    }
                    alt="product"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div>
            <Carousel
              className="mt-1 mb-1"
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={dt.componentsSection.Interval}
            >
              {dt.componentsSection.link.map((img) => (
                <div>
                  <img
                    src={
                      img.desktopLink === "" ? img.mobileLink : img.desktopLink
                    }
                    alt="product"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <button
                onClick={() => updateData(dt)}
                class="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                Edit
              </button>
            </div>
            <div>
              <button
                class="btn btn-outline-danger"
                type="button"
                id="button-addon2"
                onClick={() => deleteData(dt._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
