import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import styles from "../modules/landing.module.css";

const Landing = (props) => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <main className={styles.main}>
            <section className={styles.welcome}>
                <h2 className={styles.h2}>Welcome to the</h2>
                <h1 className={styles.h1}>League of Extraordinary Genitals</h1>
            </section>
            <section className={styles.action}>
                <form onSubmit={handleSubmit}>
                </form>
            </section>
        </main >
    )
};

export default Landing;