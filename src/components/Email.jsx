import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"
export const Email = () => {
  const form = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [Text, setText] = useState("")
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !Text.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }else {
      emailjs
        .sendForm("service_e0t21ja", "template_4lesw5j", form.current, {
          publicKey: "nsVq7WIEOtdMB_Uus",
        })
        .then(
          () => {
Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});
            setName("");
            setEmail("");
            setText("");
          },
          () => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
            setName("");
            setEmail("");
            setText("");
          }
        );

    }

  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="inputs">
        <div className="in">
          <label>Name</label>
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="in">
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <label>Message</label>
      <textarea
        placeholder="Message"
        name="message"
        value={Text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <input type="submit" value="Send Message" />
    </form>
  );
}
