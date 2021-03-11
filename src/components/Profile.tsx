import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/antoniorrm.png" alt="antoniorrm" />
      <div>
        <strong>Antonio Raimundo</strong>

        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
