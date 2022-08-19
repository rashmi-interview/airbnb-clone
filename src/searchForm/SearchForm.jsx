import React, { useState } from "react";
import { ReactComponent as Filter } from "../assets/filter.svg";
import Modal from "react-bootstrap/Modal";
import { useWindowSize } from "../utils/useWindowSize";
import "./searchPanel.css";

const TRIGGER_NODE = {
  DESTINATION: "DESTINATION",
  CHECKIN: "CHECKIN",
  CHECKOUT: "CHECKOUT",
  GUESTS: "GUESTS"
};

export function SearchForm(props) {
  const [show, setShow] = useState(false);
  const [positions, setPositions] = useState({ left: 0, top: 0, width: "0" });
  const [triggerNodeName, setTriggerNodeName] = useState(undefined);

  function handleClose() {
    setShow(false);
  }

  function handleShow(event, formName) {
    setShow(true);
    let node = event.target;
    let rect = node.getBoundingClientRect();
    setTriggerNodeName(formName);
    setPositions({ top: rect.bottom, left: rect.left, width: rect.width });
  }

  return (
    <section className="section-padding-wrapper m-t-20">
      <div className="search-panel">
        <div
          className="search-panel__input-container"
          onClick={(event) => handleShow(event, TRIGGER_NODE.DESTINATION)}
        >
          <div className="search-panel__input">
            <label className="search-panel__input-label">
              <span className="fw-bold">Where</span>
            </label>
            <input
              type="text"
              className="search-panel__input-destination"
              placeholder="Search destinations"
            />
          </div>
        </div>
        <div
          className="search-panel__input-container"
          onClick={(event) => handleShow(event, TRIGGER_NODE.CHECKIN)}
        >
          <div className="search-panel__input">
            <label className="search-panel__input-label">
              <span className="fw-bold">Check in</span>
            </label>
            <input
              type="text"
              className="search-panel__input-destination"
              disabled
              placeholder="Search destinations"
            />
          </div>
        </div>
        <div
          className="search-panel__input-container"
          onClick={(event) => handleShow(event, TRIGGER_NODE.CHECKOUT)}
        >
          <div className="search-panel__input">
            <label className="search-panel__input-label">
              <span className="fw-bold">Check out</span>
            </label>
            <input
              type="text"
              className="search-panel__input-destination"
              disabled
              placeholder="Search destinations"
            />
          </div>
        </div>
        <div
          className="search-panel__input-container"
          onClick={(event) => handleShow(event, TRIGGER_NODE.GUESTS)}
        >
          <div className="search-panel__input search-panel__input-guests">
            <label className="search-panel__input-label">
              <span className="fw-bold">Guests</span>
            </label>
            <input
              type="text"
              className="search-panel__input-destination"
              disabled
              placeholder="Search destinations"
            />
          </div>
        </div>

        <div className="search-panel__input-collapsed" onClick={handleShow}>
          <button
            type="button"
            className="search-panel__input-collapsed-btn"
            onClick={handleShow}
          >
            <Filter className="w-16" />
          </button>
        </div>
        <ModalWrapper
          positions={positions}
          show={show}
          handleClose={handleClose}
        >
          {renderForm(triggerNodeName)}
        </ModalWrapper>
      </div>
    </section>
  );
}

function ModalWrapper({ positions, show, handleClose, children }) {
  const { innerWidth } = useWindowSize();

  const isMobView = innerWidth < 768;
  const isTabletView = innerWidth >= 768 && innerWidth < 1024;

  const TabStyles = {
    top: positions.top,
    minWidth: `${positions.width}px`,
    margin: "20px 12vw"
  };

  const DesktopStyles = {
    left: positions.left,
    top: positions.top,
    minWidth: `${positions.width}px`,
    margin: "20px 0px 0px 0px"
  };

  return (
    <Modal
      style={isMobView ? {} : isTabletView ? TabStyles : DesktopStyles}
      show={show}
      dialogClassName="modal-form"
      onHide={handleClose}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}

function FormDestination() {
  return <h3>Search By Region</h3>;
}

function FormCalendarCheckin() {
  return <h3>Select Checkin time</h3>;
}

function FormCalendarCheckout() {
  return <h3>Select Checkout time</h3>;
}

function FormGuest() {
  return <h3>Add number of guests</h3>;
}

function renderForm(form) {
  if (form === TRIGGER_NODE.DESTINATION) {
    return <FormDestination />;
  }
  if (form === TRIGGER_NODE.CHECKIN) {
    return <FormCalendarCheckin />;
  }
  if (form === TRIGGER_NODE.CHECKOUT) {
    return <FormCalendarCheckout />;
  }
  if (form === TRIGGER_NODE.GUESTS) {
    return <FormGuest />;
  }
  return null;
}
