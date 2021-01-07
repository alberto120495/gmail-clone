import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import firebase from "firebase";

function SendMail() {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    dispatch(closeSendMessage());
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <p className="SendMail__error">To is Required!</p>}

        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.subject && (
          <p className="SendMail__error">subject is Required!</p>
        )}

        <input
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
          ref={register({ required: true })}
        />
        {errors.message && (
          <p className="SendMail__error">message is Required!</p>
        )}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
