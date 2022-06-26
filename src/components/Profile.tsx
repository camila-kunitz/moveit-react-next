import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengeContext);


  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/81050261?v=4" alt="Camila Kunitz" />
      <div>
        <strong>Camila Kunitz</strong>
        <p>
        <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}