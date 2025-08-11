import React from 'react'

const Achivements = () => {
  return (
    <div className='achivements-section'>
      <h1>Achivements</h1>
      <div className="achieve-section">
        <div className="sections">
            <h2>Academic Achievements</h2>
            <p> 🥉 3rd Topper in computer department academic year 2023-24 with 9.6 CGPA (Sem-2)..</p>
              <a href="2nd_rank.jpg" target="_blank">Certificate</a>
        </div>
        <div className="sections">
            <h2>Technical Achievements</h2>
            <p> 🥈 2nd Place Winner in the National-Level Tech Fest Web Development Project Competition..</p>
            <a href="">Certificate</a>
        </div>
        <div className="sections">
            <h2>Technical Achievements</h2>
            <p> HackerRank 5⭐ Achiever in SQL and Data Structures..</p>
            <a href="https://www.hackerrank.com/dashboard">Hackerrank</a>
        </div>
      </div>
    </div>
  )
}

export default Achivements
