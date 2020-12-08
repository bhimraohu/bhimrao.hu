import React, { useState } from "react"
import styled from 'styled-components';

import { DesignSettings } from "../../utils/constants";
import TitleOnly from "../common/TitleOnly";
import Card from '../common/Card';
import RichTextCustom from '../common/RichTextCustom';
import Modal from '../common/Modal'
import { Colors } from '../../utils/constants';

const TeamPageWrapper = styled.section`
  margin: 3rem auto;

  @media screen and (max-width: 1000px) {
    .modal-image-container {
      margin-right: 0 !important;
      
      img {
        max-height: 400px !important;
      }
    }
  }

  .modal-image-container {
    max-height: 600px;
    margin-right: 5rem;
  }

  .modal-content-wrapper {
    .modal-title > h1 {
      font-size: 3rem;
      font-weight: bold;
      margin: 2rem 0;
      color: ${Colors.textColor};
      min-height: 0;
      margin-top: 0;
    }

    .text > p {
      margin: 1.5rem 0;
    }
  }
`;

const MemberRows = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.innerWidth};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }

  .card-container {
    margin: 3rem 0;
    cursor: pointer;

    > span {
      width: 23rem !important;
    }

    .card-content-wrapper {
      justify-content: flex-start !important;

      .card-title > h1 {
        min-height: 0 !important;
        margin: 1rem 0 !important;
      }
    }
  }
`;

const TeamPage = ({ data }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const onClickHandler = (node) => {
    if (!node.name) {
      return;
    }

    setModalContent(node);
    setModalOpen(true);
  }

  const setToClose = () => {
    setModalOpen(false);
  }

  return (
    <TeamPageWrapper>
      <TitleOnly title={data.title} />
      {
        modalOpen
          ? <Modal title={''} content={''} setToClose={setToClose}>
            <div className="modal-image-container">
              <img src={modalContent.image.url} alt={modalContent.image.alt} />
            </div>
            <div className="modal-content-wrapper">
              <div className="content-container">
                {
                  modalContent.date
                    ? <p className="date">{modalContent.date}</p>
                    : null
                }

                <div className="modal-title">
                  <RichTextCustom render={modalContent.title || modalContent.name} />
                </div>
                <div className="text common-text">
                  <RichTextCustom render={modalContent.short_description || modalContent.details} />
                </div>
              </div>
            </div>
          </Modal>
          : null
      }
      <MemberRows>
        {
          data.team_members.map((node, idx) => {
            return (
              <div key={idx} className="card-container" onClick={onClickHandler.bind(null, node)}>
                <Card item={node} width={'initial'} height={'100%'} />
              </div>
            )
          })
        }
      </MemberRows>
    </TeamPageWrapper>
  );
}

export default TeamPage;