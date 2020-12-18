import React from "react"
import styled from 'styled-components';

import { useLocation } from '@reach/router';
import queryString from 'query-string';

import { Colors, DesignSettings } from "../../utils/constants";
import Modal from '../common/Modal'
import RichTextCustom from '../common/RichTextCustom';

const FormWrapper = styled.section`

  @media screen and (max-width: 1300px) {
    padding-left: ${DesignSettings.mobilePaddingLeft};
    padding-right: ${DesignSettings.mobilePaddingRight};
  }

  @media screen and (max-width: 950px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: inherit;
  }
`;

const FormContainer = styled.form`
  width: ${DesignSettings.textWidth};
  margin: 2rem auto;
  padding: 1.5rem;
  background: #F7F6F0;;
  font-size: 2rem;
  color: ${Colors.textColor};
  margin-bottom: 10rem;
  border: 1px solid ${Colors.lightGrey};

  @media screen and (max-width: 950px) {
    width: initial !important;
  }

  label {
    font-weight: 600;
  }

  input,
  textarea {
    margin-top: .5rem;
    margin-bottom: 2rem;
    border-radius: 4px;
    padding: .5rem .5rem .5rem 1rem;
    border: 1px solid ${Colors.lightGrey};
    height: 40px;
    width: 100%;
    font-weight: 500;
    line-height: 2.2rem;
    font-size: 1.4rem;
    color: ${Colors.main};

    &:focus {
      outline: none;
    }
  }

  textarea {
    height: 100px;
    resize: none;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  .checkbox-container {
    display: flex;
    justify-content: flex-start;

    input {
      width: 3rem;
      margin-right: 4rem;
      margin-top: 0;
      margin-bottom: 0;
      cursor: pointer;
    }

    p {
      align-self: center;
      font-size: 1.5rem;
    }
  }
`;

const Button = styled.button`
  border: .1rem solid ${Colors.red};
  background-color: ${Colors.red};
  color: white;
  padding: 0 1.6rem;
  line-height: 4.5rem;
  font-weight: bold;
  font-size: 1.6rem;
  min-width: 17rem;
  cursor: pointer;
  margin-top: 3rem;

  &:hover {
    border: .1rem solid ${Colors.red};
    background-color: white;
    color: ${Colors.red};
  }

  &:focus {
    outline: none;
  }
`;

const Form = ({ form_fields, label, action }) => {
  const location = useLocation();
  if (typeof window === 'object') {
    window.history.pushState({}, document.title, location.pathname);
  }

  return (
    <FormWrapper>
      {checkResult(location)}
      <FormContainer
        name="contact-us"
        method="POST"
        data-netlify="true"
        action={`/${action}?sent=true`}
        netlify
        netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
      >
        {/* This needed for Netlify  */}
        <input type="hidden" name="form-name" value="contact-us" />
        {
          form_fields.map((field, idx) => {
            switch (field.field_type) {
              case 'text':
              case 'email':
                return (
                  <div key={idx}>
                    <label>
                      {field.field_name}
                      <input
                        name={field.field_name}
                        type={field.field_type}
                        required={field.required === 'true'}
                        placeholder={field.field_name}
                      />
                    </label>
                  </div>
                )
              case 'textarea':
                return (
                  <div key={idx}>
                    <label>
                      {field.field_name}
                      <textarea
                        name={field.field_name}
                        required={field.required === 'true'}
                        placeholder={field.field_name}
                      />
                    </label>
                  </div>
                )
              case 'checkbox':
                return (
                  <div key={idx} className="checkbox-container">
                    <input
                      name={field.field_name}
                      type={field.field_type}
                      required={field.required === 'true'}
                    />
                    <RichTextCustom render={field.field_and_link} />
                  </div>
                );
              default:
                return (
                  <div></div>
                )
            }
          })
        }
        <div data-netlify-recaptcha="true"></div>
        <div className="button-container">
          <Button type="submit">{label}</Button>
        </div>
      </FormContainer>
    </FormWrapper>
  )
}

const checkResult = (location) => {
  const query = location.search ? queryString.parse(location.search) : null;

  if (!query) {
    return null;
  }

  return showModal(Boolean(query.sent));
}

const showModal = (sent) => {
  return (
    sent
      ? <Modal title={''} content={''} />
      : null
  )
}

// const getCheckboxLabel = (field_name, link) => {
//   if (field_name.indexOf('<a>') === -1) {
//     return field_name;
//   }

//   const text1 = field_name.substring(0, field_name.indexOf('<a>'));
//   const linkLabel = field_name.substring(field_name.indexOf('<a>') + 3, field_name.indexOf('</a>'));
//   const text2 = field_name.substring(field_name.indexOf('</a>') + 4);
//   console.log(link)

//   return (
//     <>
//       <span>{text1}</span>
//       <a href={link} className="link-label">{linkLabel}</a>
//       <span>{text2}</span>
//     </>
//   );
// }

export default Form;
