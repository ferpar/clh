import styles from "./page.module.css";
import Highlighted from "@/components/Highlighted";
import CourseList from "@/components/Courses";

export default function Courses() {
  return (
    <main className={styles.main}>
      <Highlighted />
      <CourseList /> 
    </main>
  );
}
