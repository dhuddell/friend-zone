import React from 'react';
import PropTypes from 'prop-types';
import { ModalContent } from '..';

const Modal = ({ handleClose, handleSubmit, show, goals, id }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-header">
          <span className="modal-header-title">{'Hi I\'m a modal'}</span>
          <button className="modal-close-btn fa fa-close" onClick={handleClose} />
        </div>
        <div className="modal-content">
          <ModalContent
            goals={goals}
            id={id}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  goals: PropTypes.object,
  id: PropTypes.string,
};

export default Modal;
