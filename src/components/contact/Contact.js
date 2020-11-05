import React from 'react';
import styled from 'styled-components';

import { DesignSettings } from "../../utils/constants";
import TextWithTitle from '../common/TextWithTitle';
import Form from './Form';

const ContactWrapper = styled.section`
  margin: 0 auto;
  width: ${DesignSettings.textWidth};
  display: flex;
  flex-direction: row;
  flex: 0 0 30%;
  flex-wrap: wrap;
  justify-content: space-between;

  .card-container {
    width: 30%;
    margin: 3rem 0;
  }
`;

const Contact = ({ help_form }) => {

  return (
    <ContactWrapper>
      <TextWithTitle title={help_form.form_title} text={help_form.form_description} />
      <Form form_fields={help_form.form_fields} label={help_form.button_label} action={help_form.form_action} />
    </ContactWrapper>
  )
}
export default Contact;