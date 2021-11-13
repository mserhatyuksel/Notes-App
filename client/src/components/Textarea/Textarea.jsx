import styles from "./Textarea.module.css";
const TextArea = () => {
  const handleChecked = (e) => console.log(e.target.id);
  return (
    <div className={styles.inputWrapper}>
      <textarea
        className={styles.textArea}
        name="note"
        cols="100"
        rows="7"
        placeholder="Enter your note here..."
      />
      <div className={styles.colors} onChange={handleChecked}>
        <label className={styles.container}>
          <input type="radio" name="color" id="pink" />
          <span className={`${styles.checkmark} ${styles.pink}`} />
        </label>
        <label className={styles.container}>
          <input type="radio" name="color" id="purple" />
          <span className={`${styles.checkmark} ${styles.purple}`} />
        </label>
        <label className={styles.container}>
          <input type="radio" name="color" id="yellow" />
          <span className={`${styles.checkmark} ${styles.yellow}`} />
        </label>
        <label className={styles.container}>
          <input type="radio" name="color" id="blue" />
          <span className={`${styles.checkmark} ${styles.blue}`} />
        </label>
        <label className={styles.container}>
          <input type="radio" name="color" id="green" />
          <span className={`${styles.checkmark} ${styles.green}`} />
        </label>
        <button className={styles.add_btn}>ADD</button>
      </div>
    </div>
  );
};

export default TextArea;
