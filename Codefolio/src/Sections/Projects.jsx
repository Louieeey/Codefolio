import styles from './Projects.module.css';

function Projects() {
    
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt animi fugiat quasi non itaque a possimus asperiores, at maxime laudantium illo eveniet tenetur adipisci mollitia, iusto magnam veritatis libero consectetur?"
    const description1 = "Blaze n' Bite is my first personal project, a static restaurant website built with HTML, CSS, and JavaScript. Throughout development, I faced challenges, especially with responsive design and clean coding. These obstacles helped me grow, and by the end, I knew where to focus my efforts for future projects, confident I’d apply the lessons learned to overcome new challenges."

    return (
        <section id="Projects" className={styles.section}>
            <div>
                <div className={styles.frame}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Proj1.png" alt="proj1" />
                        </a>
                        <h2>Blaze n' Bite</h2>
                        <br></br>
                        <p>{description1}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="#">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                    <div className={styles.box}>
                        <a href="https://mylink-link.com">
                            <img src="/images/Placeholder.jpg" alt="proj1" />
                        </a>
                        <h2>Coming Soon</h2>
                        <br></br>
                        <p>{description}</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;