import React from "react";
import Layout from "@theme/Layout";

import Logo from "../../static/img/logo.svg";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  return (
    <Layout title="Modern Mail Server" description="Modern Mail Server">
      <div className={styles.container}>
        <Logo className={styles.logo} role="img" />
        <h1 className={styles.title}>Quokka</h1>
        <h2 className={styles.subtitle}>Modern Mail Server</h2>
      </div>
    </Layout>
  );
}
