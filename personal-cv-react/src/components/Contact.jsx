import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          alert(data.message);
          alert(`Thank you ${name}!`);
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Failed to send message.");
      });
  }

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>
      
      
    </section>
  );
}

export default Contact;