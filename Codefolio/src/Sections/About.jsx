import { useState } from "react";
import styles from "./About.module.css";


function About() {

    const stack = ["HTML", "CSS", "Javascript", "NodeJS", "ReactJS"];
    const tools = ["Github", "NPM", "Git", "Vercel", "VS Code"];
    const [activeTab, setActiveTab] = useState("techStack");

    return (
        <section id="About" className={styles.section}>
            <main>
                <div className={styles.container}>
                    <div className={styles.card}>
                        <img src="/images/Me2.jpg" alt="pic" />
                    </div>
                    <div className={styles.desc}>
                        <p>My job is to build your website to be functional and user-friendly yet still attractive. In addition, I provide a personal touch to your product and ensure that the website catches attention and is easy to use.</p>
                        <br/>
                        <p>My goal is to convey your message and identity in the most creative way. If you are interested in hiring me, please reach me through the listed contact.</p>
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.navbtn} onClick={() => setActiveTab("techStack")}>Tech Stack</button>
                    <button className={styles.navbtn} onClick={() => setActiveTab("tools")}>Tools</button>
                </div>
                <div className={styles.contentContainer}>
                    {activeTab === "techStack" && (
                        <div className={styles.content}>
                            <button className={styles.contbtn}>{stack[0]}</button>
                            <button className={styles.contbtn}>{stack[1]}</button>
                            <button className={styles.contbtn}>{stack[2]}</button>
                            <button className={styles.contbtn}>{stack[3]}</button>
                            <button className={styles.contbtn}>{stack[4]}</button>
                        </div>
                    )}
                    {activeTab === "tools" && (
                        <div className={styles.content}>
                            <button className={styles.contbtn}>{tools[0]}</button>
                            <button className={styles.contbtn}>{tools[1]}</button>
                            <button className={styles.contbtn}>{tools[2]}</button>
                            <button className={styles.contbtn}>{tools[3]}</button>
                            <button className={styles.contbtn}>{tools[4]}</button>
                        </div>
                    )}
                </div>
            </main>
        </section>
    );
}

export default About;
