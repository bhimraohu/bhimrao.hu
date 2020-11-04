import React from "react"
import styled from 'styled-components';
import { Colors, DesignSettings } from "../../utils/constants";

const FormWrapper = styled.form`
  width: ${DesignSettings.textWidth};
  margin: 2rem auto;
  padding: 10px;
  background: #F7F6F0;;
  font-size: 2rem;
  color: ${Colors.textColor};
  margin-bottom: 10rem;
  border: 1px solid ${Colors.lightGrey};

  label {
    font-weight: 600;
  }

  input,
  textarea {
    margin-top: .5rem;
    margin-bottom: 2rem;
    border-radius: 4px;
    height: 40px;
    border: 1px solid ${Colors.lightGrey};
    width: 100%;
    font-weight: 500;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }
`;

const Button = styled.button`
  border: .1rem solid ${Colors.red};
  background-color: ${Colors.red};
  color: ${Colors.dirtyWhite};
  line-height: 4.5rem;
  padding: 0 1.6rem;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;

  &:hover {
    border: .1rem solid ${Colors.red};
    background-color: white;
    color: ${Colors.red};
  }
`;

const Form = ({ form_fields, label, action }) => {
  return (
    <FormWrapper
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
    </FormWrapper>
  )
}

export default Form;
