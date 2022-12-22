import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vacu99j",
        "template_toc4num",
        form.current,
        "WqO_8vlLzebOvBdOf"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <form
        className="contact_form"
        id="myForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="first_row">
          <input type="text" placeholder="Nombre *" name="name" required />
        </div>
        {/* End .first_row */}

        <div className="second">
          <input
            type="email"
            placeholder="Email *"
            name="user_email"
            required
          />
        </div>
        {/* End .second */}

        <div className="third">
          <textarea placeholder="Mensaje *" name="message" required></textarea>
        </div>
        {/* End .third */}

        <div className="jf_tm_button">
          <button type="submit" className="color">
            Enviar
          </button>
        </div>
        {/* End tokyo_tm_button */}
      </form>
      {/* End contact */}
    </>
  );
};

export default Contact;
