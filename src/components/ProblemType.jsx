import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'
import Navbar from '../components/Navbar'
import leetcode from '../assets/leetcode.png'
import gfg from '../assets/GeeksForGeeks.png'
import './all_css_codes/ProblemType.css'

export default function ProblemType() {
    const { slug } = useParams()
    const problems = data[slug] || null;

    return (
        <div className="problem_list">
            <Navbar />

            {
                problems ? (
                    problems.map((problem) => (
                        <div className="problem" key={problem.id}>
                            <input type="checkbox" id={`problem-${problem.id}`} />
                            <h1>{problem.problem_name}</h1>
                            <p>{problem.topic}</p>
                            <p>{problem.difficulty}</p>
                            <a href={problem.leetcode} target="_blank" rel="noopener noreferrer">
                                <img src={leetcode} alt={problem.problem_name} />
                            </a>
                            <a href={problem.gfg} target="_blank" rel="noopener noreferrer">
                                <img src={gfg} alt={problem.problem_name} />
                            </a>
                        </div>
                    ))
                ) : <p>Problems not found</p>
            }
        </div>
    )
}
