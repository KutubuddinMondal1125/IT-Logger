import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTechs } from "../../actions/techAction";

import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTechs }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" && lastName === "") {
      M.toast({ html: "Please Add First Name & Last Name" });
    } else {
      addTechs({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added as a Technician` });

      // Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Enter Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="modal-footer" onClick={onSubmit}>
          <a
            href="#!"
            className="modal-close waves-effect waves-light blue btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired,
};

export default connect(null, { addTechs })(AddTechModal);
