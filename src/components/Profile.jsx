import React from 'react'
import useState from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./all_css_codes/Profile.css"
import { Line } from 'react-chartjs-2';
import demo from '../assets/demo.jpg'

export default function Profile() {
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem("user_info"));
    const [img, setImg] = React.useState(demo);

    const handleLogout = () => {
        const ok = confirm(
            "Are you sure you want to log out? You can lose all your progress!"
        );
        if (ok) {
            localStorage.removeItem("user_info");
            navigate("/login", { replace: true });
        }
    };

    function handleImageChange(e) {
        const file = e.target.files[0];
        const url = URL.createObjectURL(file);
        setImg(url);
        setUser((prevUser) => ({ ...prevUser, profilePicture: url }));
    }
    return (
        <div className="profile">
            <div className="profile-nav">
                <Link to='/'>← Go to Home</Link>
                <button onClick={() => navigate(-1)}>← Go Back</button>
            </div>
            <div className="profile-part">
                <div className="profile-img">
                    <input
                        type="file"
                        id="file-input"
                        accept="image/*"
                        onChange={handleImageChange}
                        hidden
                    />

                    <label htmlFor="file-input">
                        <img src={img} alt="Profile" />
                    </label>
                </div>
                <div className="profile-part1">
                    <div className="profile">
                        <h1>{data?.name}</h1>
                        <p>Email: {data?.email}</p>
                        <p>Status: {data?.isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
                        <button>Update Profile</button>
                    </div>
                    <div className="chart">
                        <h2>Problem Solving Progress</h2>
                        <div className="circle"></div>
                        <div className="sloved-problems">100/750</div>
                    </div>
                </div>
                <div className="profile-part2">
                    {/* For Graphs Part */}
                    <h2>Recent Activity</h2>
                    <ul>
                        <li>Solved "Two Sum" problem</li>
                        <li>Attempted "Longest Substring Without Repeating Characters"</li>
                        <li>Viewed "Median of Two Sorted Arrays" problem</li>
                    </ul>
                </div>
            </div>
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}
