import { useRef, useState } from "react";
import styles from "../styles/contacts.module.css";
import emailjs from "@emailjs/browser";
import sendArrow from "../assets/arrow.png";

export const Contanct = ({ name }: { name: string }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

  const hover = () => setHovered(!hovered);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    emailjs
      .sendForm(
        "service_dq6nvu9",
        "template_lvm5ack",
        form.current!,
        "8plLebwzw4WvrdxuW"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section data-name={name} data-number="3" id="Contact">
      <div className={styles.contact_container}>
        <h3>Contact me</h3>
        <p>
          If you have an opportunity to share, or would like to discuss
          anything, you can leave your details below.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.input}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className={`${styles.input} ${styles.message}`}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button
            className={styles.send_email_button}
            onMouseEnter={hover}
            onMouseLeave={hover}
          >
            <div className={styles.send_text}>
              <span
                style={{
                  transform: hovered ? "translateY(-100%)" : undefined,
                  opacity: hovered ? "0" : undefined,
                }}
              >
                Send
              </span>
              <span
                style={{
                  top: hovered ? "0" : undefined,
                  opacity: hovered ? "1" : undefined,
                }}
              >
                Send
              </span>
            </div>
            <img
              src={sendArrow}
              alt="send email"
              height={"20px"}
              width={"20px"}
              className={hovered ? styles.arrow_icon : undefined}
            />
          </button>
        </form>
      </div>
    </section>
  );
};
