import styles from "../../../styles/layout/aboutMeComponent/aboutMe.module.scss";

export default async function AboutMe() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.header}>THIS IS ME</div>
      <div className={styles.dummy}>
        Hey! I'm a junior fullstack developer, which basically means I can break
        both the frontend *and* the backend with equal efficiency. I may be
        junior, but my passion is senior-level.My career began like all great
        tech tales — copying random code from Stack Overflow and hoping for the
        best. These days, Ive upgraded to copying *better* code and actually
        understanding about 60% of it. I specialize in React, Node.js, and
        overusing console.log for things that could probably be debugged more
        professionally. On the backend, I sling APIs like spaghetti — messy but
        surprisingly functional. MongoDB and I are in a committed relationship,
        but I occasionally flirt with PostgreSQL when I'm feeling fancy. Youll
        often find me refreshing my localhost 87 times to fix a typo, or yelling
        “Why?!” at my terminal while pretending its the codes fault. It usually
        is. Probably. Maybe. When I'm not coding, I enjoy thinking about coding,
        dreaming about bugs, and Googling “how to center a div” — because lets
        be honest, that mystery was never meant to be solved. I'm here to learn,
        loathe, and occasionally break production just to keep things
        interesting.
      </div>
    </div>
  );
}
