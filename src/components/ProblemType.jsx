import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'
import Navbar from '../components/Navbar'
import leetcode from '../assets/leetcode.png'
import gfg from '../assets/GeeksForGeeks.png'
import './all_css_codes/ProblemType.css'

export default function ProblemType() {
    const { slug } = useParams()
    const problems = data[slug] || null;
    // For Chart Data
    const [chartData, setChartData] = useState({
        time: null,
        date: null,
        year: null
    });

    const curr_time = new Date().toLocaleTimeString();
    const curr_date = new Date().toLocaleDateString();
    const curr_year = new Date().getFullYear();
    // Store checked problem IDs
    const [checkedItems, setCheckedItems] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const normalizedSearch = searchTerm.toLowerCase();
    // Load from localStorage when component mounts
    useEffect(() => {
        const savedData = localStorage.getItem(`checkedProblems-${slug}`)

        if (savedData) {
            setCheckedItems(JSON.parse(savedData))
        }
    }, [slug])

    // Handle checkbox change
    const handleCheckboxChange = (id) => {
        const updatedCheckedItems = {
            ...checkedItems,
            [id]: !checkedItems[id]
        }

        const updatedChartData = {
            ...chartData,
            time: curr_time,
            date: curr_date,
            year: curr_year
        }
        setChartData(updatedChartData);
        setCheckedItems(updatedCheckedItems)

        // Save to localStorage
        localStorage.setItem(`checkedProblems-${slug}`, JSON.stringify(updatedCheckedItems))
        localStorage.setItem("chartData", JSON.stringify(updatedChartData));
    }

    return (
        <div className="problem_list">
            <Navbar />
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search problems..."
                className="search-bar"
            />
            {
                problems ? (
                    problems.filter((problem) => problem.problem_name.toLowerCase().includes(normalizedSearch)).map((problem) => (
                        <div className="problem" key={problem.id}>


                            <input
                                type="checkbox"
                                id={`problem-${problem.id}`}
                                checked={checkedItems[problem.id] || false}
                                onChange={() => handleCheckboxChange(problem.id)}
                            />

                            <h1>{problem.problem_name}</h1>
                            <p>{problem.topic}</p>
                            <p>{problem.difficulty}</p>

                            <a
                                href={problem.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={leetcode}
                                    alt={problem.problem_name}
                                />
                            </a>

                            <a
                                href={problem.gfg}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={gfg}
                                    alt={problem.problem_name}
                                />
                            </a>

                        </div>
                    ))
                ) : (
                    <p>Problems not found</p>
                )
            }
        </div>
    )
}