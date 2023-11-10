import styles from "../styles/contacts.module.css";
import { useForm } from "react-hook-form";

interface UserInput {
  name: string;
  email: string;
  message: string;
  event: React.FormEvent<HTMLFormElement>;
}

export const Contanct = ({ name }: { name: string }) => {
  const { register, handleSubmit } = useForm<UserInput>();

  const onSubmit = async (data: UserInput) => {
    const { name, email, message, event } = data;
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Message: ", message);
    const log = "yes";
  };

  return (
    <section data-name={name} data-number="3" id="Contact">
      <div>
        <h3>Contact me</h3>
        <p>
          If you have an opportunity to share, or would like to discuss
          anything, you can leave your details below.
        </p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.input}>
            <label htmlFor="name">Name</label>
            <input type="text" {...register("name")} id="name" required />
          </div>
          <div className={styles.input}>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email")} id="email" required />
          </div>
          <div className={styles.input}>
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message")}
              id="message"
              cols={30}
              rows={10}
              required
            ></textarea>
          </div>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};
