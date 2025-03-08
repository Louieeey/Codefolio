import React from "react";
import styles from './Contact.module.css';
import Footer from '../Footer/Footer.jsx'

function Contact() {

    const address = "Manila, Philippines"
    const facebook = "Bryan Alvarez Maaño"
    const instagram = "louieeey_"
    const email = "louiebryanmaano@gmail.com"
    const number = "+63 09662981074"

    return (
        <>
        <section id="Contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.box}>
                    <ul>
                        <li><img src="images/location.png" alt="Location icon" />{address}</li>
                        <li><img src="images/facebook.png" alt="Facebook icon" />{facebook}</li>
                        <li><img src="images/instagram.png" alt="Instagram icon" />{instagram}</li>
                        <li><img src="images/email.png" alt="Email icon" />{email}</li>
                        <li><img src="images/phone.png" alt="Phone icon" />{number}</li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </section>
        </>
    );
}

export default Contact;