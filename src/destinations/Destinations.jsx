import { ReactComponent as Star } from "../assets/star.svg";
import "./destinations.css";

export function Destinations(props) {
  return (
    <section className="m-t-20 section-padding-wrapper">
      <div className="destinations-grid">
        {props.destinations.map((destination) => {
          return (
            <div key={destination.id} className="destination-card">
              <div className="destination-card__image-wrapper">
                <img
                  src={destination.cover}
                  className="destination-card__image"
                  alt=""
                />
              </div>
              <div>
                <p className="destination-card__info destination-card__info--location">
                  <span className="fw-bold">{destination.name}</span>
                  <span className="d-flex">
                    <Star className="w-12 m-r-5" />
                    {destination.rating}
                  </span>
                </p>
                <p className="destination-card__info">
                  <span className="m-r-5">{destination.distance}</span>
                  kms away
                </p>
                <p className="destination-card__info">
                  <span className="fw-bold m-r-5">
                    Rs.{destination.price.night}
                  </span>
                  night
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
