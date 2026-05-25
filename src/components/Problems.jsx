import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import './all_css_codes/Problems.css'

export default function Problems() {
    const [topic, settopic] = useState('all')
    const navigate = useNavigate()
    function openProblemsList(type) {
        navigate(`/problems/${type}`);
        console.log(type)
    }
    return (
        <div className="problems">
            <Navbar />
            <div className="problems_list">
                <h1 onClick={() => openProblemsList("arrays")} >Arrays</h1>
                <h1 onClick={() => openProblemsList("strings")} >Strings</h1>
                <h1 onClick={() => openProblemsList("recursion")} >Recursion</h1>
                <h1 onClick={() => openProblemsList("linked-list")} >Linked List</h1>
                <h1 onClick={() => openProblemsList("stack-queue")} >Stack & Queue</h1>
                <h1 onClick={() => openProblemsList("sliding-window-two-pointers")} >Sliding Window & Two Pointers</h1>
                <h1 onClick={() => openProblemsList("binary-search")} >Binary Search</h1>
                <h1 onClick={() => openProblemsList("bit-manipulation")} >Bit Manipulation</h1>
                <h1 onClick={() => openProblemsList("trees")} >Trees</h1>
                <h1 onClick={() => openProblemsList("binary-search-tree")} >Binary Search Tree</h1>
                <h1 onClick={() => openProblemsList("heap-priority-queue")} >Heap / Priority Queue</h1>
                <h1 onClick={() => openProblemsList("trie")} >Trie</h1>
                <h1 onClick={() => openProblemsList("greedy-algorithms")} >Greedy Algorithms</h1>
                <h1 onClick={() => openProblemsList("graphs-dsu")} >Graphs + DSU</h1>
                <h1 onClick={() => openProblemsList("dynamic-programming")} >Dynamic Programming</h1>
            </div>
        </div>
    )
}
