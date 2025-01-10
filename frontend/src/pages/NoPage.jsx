import React from "react";
import styles from  './NoPage.module.css'; 
const NoPage = () => {
  return (
    <div>
      <section className={styles.page_404}>
              <div className={`${styles.container} text-center`}>
              <h1 className={`${styles._404_Message} text-center `}>404</h1>
                <div className={styles.four_zero_four_bg}>
                </div>

                <div className={styles.contant_box_404}>
                  <h3>Look like you&apos;re lost</h3>

                  <p>the page you are looking for not available!</p>

                  <a href="/" className={styles.link_404}>
                    Go to Home
                  </a>
                </div>
              </div>


      </section>
    </div>
  );
};

export default NoPage;
