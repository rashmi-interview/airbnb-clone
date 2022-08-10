import React, { useState } from 'react';
import { ReactComponent as Filter } from "../assets/filter.svg";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./searchPanel.css";

export function SearchForm(props) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="section-padding-wrapper m-t-20">
      <div className="search-panel">
        <div className="search-panel__input-container" onClick={handleShow}>
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
        <div className="search-panel__input-container" onClick={handleShow}>
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
        <div className="search-panel__input-container" onClick={handleShow}>
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
        <div className="search-panel__input-container" onClick={handleShow}>
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
         <button type="button" className="search-panel__input-collapsed-btn" onClick={handleShow}>
            <Filter className="w-16"/>
         </button>
        </div>

      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is an sample modal. Added for sample interaction.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
