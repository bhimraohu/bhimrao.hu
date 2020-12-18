import React, { useState } from 'react';
import styled from 'styled-components';

import { Colors } from '../../utils/constants';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${(props) => { return props.visible ? 'flex' : 'none' }};
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1000px) {
      .modal-content {
        flex-direction: column !important;
      }
  }

  @media screen and (max-width: 600px) {
    .modal-container {
      width: 95% !important;
      height: 95% !important;
      align-items: flex-start !important;
      overflow-y: scroll;

      .modal-content {
        padding-left: 3rem !important;
        padding-right: 3rem !important;
      }
    }
  }

  .modal-container {
    border: 1px solid ${Colors.main};
    z-index: 11;
    background-color: ${Colors.main};
    color: ${Colors.dirtyWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 100rem;

    div {
      .modal-header {
        min-height: 6rem;
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

          &:focus {
            outline: none;
          }
        }
      }
      .modal-content {
        padding: 3rem 5rem 5rem 5rem;
        font-size: 2rem;
        background-color: ${Colors.dirtyWhite};
        color: ${Colors.main};
        display: flex;
      }
    }
  }
`;

const Modal = ({ children, title, content, modalCloseTimeout, setToClose }) => {

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
    setToClose();
  }

  return (
    <ModalWrapper visible={modalOpen}>
      <div className="modal-container">
        <div>
          <div className="modal-header">
            {title}
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
          <div className="modal-content">
            {
              children
                ? children
                : content
            }
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default Modal;