import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import stars from '../styles/stars.module.css';
const index = () => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.ico" />{' '}
      <script
        src="https://kit.fontawesome.com/0d72175350.js"
        crossOrigin="anonymous"
      />
    </Head>
    <div className={styles.bg}>
      <div className={stars.stars} />
      <div className={stars.stars2} />
      <div className={stars.stars3} />
    </div>
    <main className={styles.main}>
      <section className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://www.gravatar.com/avatar/bf45b58ab636e1610e6a8573cf6c796f.jpg?s=280"
        />
        <p>My Name Is</p>
        <h1 className={styles.h1}>Ryan van Zeben</h1>
        <hr />
        <p className={styles.callout}>
          Full-stack developer by day, Indie Game dev by night
        </p>
        <hr />
      </section>
      <section className={styles.links}>
        <ul>
          <li>
            <a target="__blank" href="https://twitter.com/missjennatulls">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a target="__blank" href="https://github.com/vanZeben">
              <i className="fa fa-github-alt" />
            </a>
          </li>
          <li>
            <a target="__blank" href="https://steamcommunity.com/id/vanZeben">
              <i className="fab fa-steam-symbol" />
            </a>
          </li>
          <li>
            <a target="__blank" href="mailto:ryan@vanzeben.ca">
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
);
export default index;
