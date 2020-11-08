import React, { useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../utils/constants';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: ${(props) => { return props.visible ? 'flex' : 'none' }};
  justify-content: center;
  align-items: center;

  .modal-container {
    border: 1px solid ${Colors.main};
    z-index: 11;
    background-color: ${Colors.main};
    color: ${Colors.dirtyWhite};
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      .modal-header {
        padding: 2rem 5rem;
        font-size: 3rem;
        font-weight: 500;
        background-color: ${Colors.main};
        color: ${Colors.dirtyWhite};
        position: relative;

        .close-modal {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-weight: 500;
          color: ${Colors.dirtyWhite};

          &:hover {
            cursor: pointer;
            font-weight: 600;
          }
        }
      }
      .modal-content {
        padding: 3rem 5rem 5rem 5rem;
        font-size: 2rem;
        background-color: ${Colors.dirtyWhite};
        color: ${Colors.main};
      }
    }
  }
`;

const Modal = ({ title, content, modalCloseTimeout }) => {

  const [modalOpen, setModalOpen] = useState(true);

  if (modalCloseTimeout) {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      close();
    }, modalCloseTimeout);
  }

  const onClickHandler = () => {
    close();
  }

  const onKeyPressHandler = () => {
    close();
  }

  const close = () => {
    setModalOpen(false);
  }

  return (
    <ModalWrapper visible={modalOpen}>
      <div className="modal-container">
        <div>
          <div className="modal-header">
            {title} <span role="img" aria-label="Sad emoji">😊</span>
            <span
              className="close-modal"
              onClick={onClickHandler}
              role="button"
              onKeyPress={onKeyPressHandler}
              tabIndex={-1}
            >
              X
                </span>
          </div>
          <p className="modal-content">
            {content}
          </p>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Modal;