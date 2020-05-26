import { NextPage } from "next";

import style from "./about.module.scss";

const AboutPage: NextPage = () => (
  <main className={style.content}>
    <h1 className={style.title}>This is About page!</h1>
  </main>
);

export default AboutPage;
