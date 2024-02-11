'use client'
import About from "@/About/about";
import styles from "./page.module.css";
import Heading from "@/headingAnimation/heading";
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    (
      async () =>{
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  },[])
  return (
    <>
    <div className={styles.spacer}></div>
    <main className={styles.main}>
      <Heading heading="About"/>
      <About/>
    </main>
    <div className={styles.spacer}></div>
    </>
  );
}
