import styles from '../styles/Home.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.contactPage}>
        <h1 className={styles.title}>Contact Us</h1>
        <div className={styles.contactContent}>
          <p className={styles.subtitle}>Get in touch with us for any questions or feedback!</p>
          
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>Email</h3>
              <p>contact@productstore.com</p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            
            <div className={styles.contactItem}>
              <h3>Address</h3>
              <p>123 Store Street<br />Shopping City, SC 12345</p>
            </div>
          </div>
          
          <div className={styles.contactForm}>
            <h3>Send us a message</h3>
            <form>
              <input 
                type="text" 
                placeholder="Your Name" 
                className={styles.formInput}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className={styles.formInput}
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className={styles.formTextarea}
              ></textarea>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}