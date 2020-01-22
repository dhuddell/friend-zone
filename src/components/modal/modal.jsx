import React from 'react';
import Modal from 'react-modal';
import { ModalContent } from '..';

const GoalModal = ({
  onRequestClose,
  goalSetCollection,
  username,
  friendId,
}) => (
  <Modal
    isOpen
    onRequestClose={onRequestClose}
    appElement={document.getElementById('app')}
  >
    <section className="modal-main">
      <div className="modal-header">
        <span className="modal-header-title">{'Hi I\'m a modal'}</span>
        <button className="modal-close-btn fa fa-close" onClick={onRequestClose} />
      </div>
      <div className="modal-content">
        <ModalContent
          onRequestClose={onRequestClose}
          goalSetCollection={goalSetCollection}
          username={username}
          friendId={friendId}
        />
      </div>
    </section>
  </Modal>
);

export default GoalModal;
