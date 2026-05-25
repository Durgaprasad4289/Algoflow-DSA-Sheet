// Home.jsx

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./all_css_codes/Home.css";
import { Link } from "react-router-dom";
import { DSA_TOPICS } from "../data/data_topics";
import hero from '../assets/hero-img.png'
import algoflow from '../assets/algoflow_icon.png';

export default function Home() {

    useEffect(() => {

        const reveals = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");
                    }

                });
            },
            {
                threshold: 0.2,
            }
        );

        reveals.forEach((el) => observer.observe(el));

        return () => observer.disconnect();

    }, []);

    return (

        <div className="home-contaier">

            <Navbar />

            <div className="home-content">

                <div className="home-left">

                    <div className="orbs"></div>
                    <div className="orbs"></div>
                    <div className="orbs"></div>

                    <h1 className="reveal fade-left">
                        Master DSA with <span>AlgoFlow</span>
                    </h1>

                    <h2 className="reveal fade-left delay-1">
                        Land Your Dream Job
                    </h2>

                    <p className="reveal fade-left delay-2">
                        Unlock your coding potential with AlgoFlow -
                        Your ultimate DSA companion. Track your progress,
                        access curated resources, and conquer coding
                        challenges with ease. Start your journey to
                        coding excellence today!
                    </p>

                    <Link
                        to="/problems"
                        className="reveal fade-up delay-3"
                    >
                        <button className="get-started-btn">
                            Get Started
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>

                    <div className="home-left-bottom-part reveal fade-up delay-4">

                        <div className="icons">

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reveal zoom-in delay-1"
                            >
                                <i className="fab fa-github"></i>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reveal zoom-in delay-2"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="reveal zoom-in delay-3"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                        </div>

                        <small>
                            Trusted by <b>4800+ students</b> across the globe
                        </small>

                    </div>

                    <div className="numbers">

                        <h2 className="reveal zoom-in delay-1">
                            750+
                            <span>Problems</span>
                        </h2>

                        <h2 className="reveal zoom-in delay-2">
                            480+
                            <br />
                            <span>Students</span>
                        </h2>

                        <h2 className="reveal zoom-in delay-3">
                            90%
                            <span>Success Rate</span>
                        </h2>

                        <h2 className="reveal zoom-in delay-4">
                            13+
                            <span>DSA Topics</span>
                        </h2>

                    </div>

                </div>

                <div className="home-right">

                    <img className="reveal fade-right delay-2" src={hero} alt="Hero" />

                </div>

            </div>

            <section className="features-section">

                <p className="feature-tag reveal fade-up">FEATURES</p>

                <div className="heading-wrapper">
                    <h1 className="reveal fade-left delay-1">Everything your prep needs</h1>

                    <p className="heading-text reveal fade-right delay-2">
                        Built around how real engineers actually prepare — not just a
                        spreadsheet in disguise.
                    </p>
                </div>

                <div className="features-grid">

                    <div className="feature-card reveal fade-up delay-1">
                        <div className="icon-box">
                            <i className="fa-regular fa-clipboard"></i>
                        </div>

                        <h3>Smart Problem Tracker</h3>

                        <p>
                            Log every problem you solve. Track difficulty, time spent,
                            and your personal notes — all in one clean dashboard.
                        </p>
                    </div>

                    <div className="feature-card reveal fade-up delay-2">
                        <div className="icon-box">
                            <i className="fa-solid fa-chart-column"></i>
                        </div>

                        <h3>Progress Analytics</h3>

                        <p>
                            Visual charts showing your weekly streaks, topic coverage,
                            and weak spots — so you always know what to work on next.
                        </p>
                    </div>

                    <div className="feature-card reveal fade-up delay-3">
                        <div className="icon-box">
                            <i className="fa-regular fa-clock"></i>
                        </div>

                        <h3>Spaced Repetition</h3>

                        <p>
                            Our algorithm reminds you to revisit problems right before
                            you forget them, making your preparation truly stick for you.
                        </p>
                    </div>

                    <div className="feature-card reveal fade-up delay-4">
                        <div className="icon-box">
                            <i className="fa-solid fa-tag"></i>
                        </div>

                        <h3>Topic Tags & Filters</h3>

                        <p>
                            Organize problems by topic — Arrays, Trees, DP, Graphs.
                            Filter by company, difficulty, or status in seconds.
                        </p>
                    </div>

                    <div className="feature-card reveal fade-up delay-5">
                        <div className="icon-box">
                            <i className="fa-regular fa-user"></i>
                        </div>

                        <h3>Company Focus Lists</h3>

                        <p>
                            See which problems are asked most at Google, Amazon,
                            Meta, and 200+ top companies. Focus your prep precisely.
                        </p>
                    </div>

                    <div className="feature-card reveal fade-up delay-6">
                        <div className="icon-box">
                            <i className="fa-solid fa-bolt"></i>
                        </div>

                        <h3>Daily Challenges</h3>

                        <p>
                            Stay consistent with a daily problem, streaks,
                            and gentle nudges — because showing up every day
                            beats cramming.
                        </p>
                    </div>

                </div>

            </section>
            <section className="carousel">
                <h1 className="feature-tag">Topics you'll Master</h1>
                <p className="heading-text">
                    Everything from basics to advanced — exactly what you need for interviews.
                </p>
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {
                            [...DSA_TOPICS, ...DSA_TOPICS].map((topic, index) => (
                                <Link to={`/problems/${topic.slug}`} className="carousel-card" key={`${topic.id}-${index}`}>
                                    <div className="icon-box">
                                        <i className={topic.icon}></i>
                                    </div>
                                    <h3>{topic.title}</h3>
                                    <p>{topic.desc}</p>
                                    <small>{topic.count}</small>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className="reveal cta-section">
                <div className="cta-orb cta-orb--tl"></div>
                <div className="cta-orb cta-orb--br"></div>
                <div className="cta-inner">
                    <h2 className="cta-heading">
                        Ready to crack your<br />interviews?
                    </h2>
                    <p className="cta-sub">
                        Join thousands of engineers who use AlgoFlow to stay consistent,<br />
                        track progress, and land the roles they want.
                    </p>
                    <Link to="/problems" className="cta-btn">
                        Start Your Journey With AlgoFlow  <i className="fa-solid fa-paper-plane"></i>
                    </Link>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <div className="footer-logo-icon">
                                <img src={algoflow} alt="AlgoFlow Logo" />
                            </div>
                            <span>AlgoFlow</span>
                        </div>
                        <p className="footer-tagline">
                            The smart way to track,<br />
                            review, and master DSA for<br />
                            your next big interview.
                        </p>
                        <div className="footer-socials">
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter"></i></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-links-grid">
                        <div className="footer-link-group">
                            <h4>Product</h4>
                            <ul>
                                <li><Link to="/problems">Features</Link></li>
                                <li><Link to="/problems">Pricing</Link></li>
                                <li><Link to="/problems">Integrations</Link></li>
                                <li><Link to="/problems">Demo</Link></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/problems">About Us</Link></li>
                                <li><Link to="/problems">Careers</Link></li>
                                <li><Link to="/problems">Blog</Link></li>
                                <li><Link to="/problems">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h4>Company</h4>
                            <ul>
                                <li><Link to="/problems">About Us</Link></li>
                                <li><Link to="/problems">Careers</Link></li>
                                <li><Link to="/problems">Blog</Link></li>
                                <li><Link to="/problems">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-link-group">
                            <h4>Privacy</h4>
                            <ul>
                                <li><Link to="/problems">Privacy Notice</Link></li>
                                <li><Link to="/problems">Terms of Service</Link></li>
                                <li><Link to="/problems">Privacy Policy</Link></li>
                                <li><Link to="/problems">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copy">© 2025 AlgoFlow. All rights reserved.</p>
                    <p className="footer-love">Built with <i className="fas fa-heart"></i> for engineers everywhere</p>
                </div>
            </footer>
        </div>
    );
}