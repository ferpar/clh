import members from './members.js';
import styles from './page.module.css';
import TeamCard from '../../components/TeamCard';

export default function Team() {
    return (
        <section className={styles["team"]}>
            <h2 className={styles["title"]}>Nuestro Equipo</h2>
            <p className={styles["hint"]}>(pulse una tarjeta para saber más)</p>
           <div className={styles["container"]}> 
                {members.map((member, index) => (
                    <TeamCard member={member} key={index} />
                ))}
           </div>
        </section>
    )
}
