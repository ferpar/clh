import members from './members.js';
import styles from './page.module.css';

export default function Team() {
    return (
        <section className={styles["team"]}>
            <h2 className={styles["title"]}>Nuestro Equipo</h2>
           <div className={styles["container"]}> 
                {members.map((member, index) => (
                    <div className={styles["card"]} key={index}>
                        <div className={styles["card-img"]}>
                            <img src={member.img} alt={member.name} />
                        </div>
                        <div className={styles["card-info"]}>
                            <h3>{member.name} {member.surname}</h3>
                            <h4>{member.role1} {member.role2}</h4>
                            <hr/>
                            <p>{member.tagline}</p>
                            {/* <p>{member.bio}</p> */}
                        </div>
                    </div>
                ))}
           </div>
        </section>
    )
}
