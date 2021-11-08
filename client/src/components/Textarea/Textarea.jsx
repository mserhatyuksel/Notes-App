import React from "react";
import styles from "./Textarea.module.css";
const TextArea = () => {
  return (
    <div className={styles.inputWrapper}>
      <textarea className={styles.textArea} name="note" cols="100" rows="7" placeholder="Enter your note here..." />
      <div className={styles.colors}>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={`${styles.checkmark} ${styles.pink}`} />
        </label>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={`${styles.checkmark} ${styles.purple}`} />
        </label>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={`${styles.checkmark} ${styles.yellow}`} />
        </label>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={`${styles.checkmark} ${styles.blue}`} />
        </label>
        <label className={styles.container}>
          <input type="checkbox" />
          <span className={`${styles.checkmark} ${styles.green}`} />
        </label>
        <button className={styles.add_btn}>ADD</button>
      </div>
    </div>
  );
};

export default TextArea;
