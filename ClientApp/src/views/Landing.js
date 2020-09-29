import React from "react";
import { Link, navigate } from "@reach/router";
import styles from "../modules/landing.module.css";

const Landing = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/home")
    }

    return (
        <main className={styles.main}>
            <section className={styles.welcome}>
                <h2 className={styles.h2}>Welcome to the</h2>
                <h1 className={styles.h1}>League of Extraordinary Genitals</h1>
            </section>
            <section className={styles.action}>
                <h2 className={styles.h2}>Already a league Member?</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" id="email" className={styles.input} placeholder="Email Address" />
                    <input type="password" name="password" id="password" className={styles.input} placeholder="Password" />
                    <button className={styles.submit}>Enter the <span className={styles.leg}>L.E.G.</span></button>
                </form>
                <Link to="/home" className={styles.a}>Continue as Guest</Link>
            </section>
        </main >
    )
};

export default Landing;