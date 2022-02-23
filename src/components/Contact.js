import "./componentStyles/Contact.css";

const Contact = () => {
  return (
    <section className="section contact center" id="contact">
      <h2 className="section-title">Contact</h2>
      <a href={`mailto:samkanan@gmail.com`}>
        <span type="button" className="contact-btn contact-btn-outline">
          email me
        </span>
      </a>
    </section>
  );
};

export default Contact;
