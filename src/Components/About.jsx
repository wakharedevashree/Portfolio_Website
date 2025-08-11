import React from 'react'

const About = () => {
  return (
    <>
    
    <div className="about">
        <div className="title">
            <h1>About Me</h1>
        </div>
        <div className="about-section">
            <div className="left">
    <img src="data:image/jpeg;base64,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" alt="Portfolio" />
                
            </div>
            <div className="right">
                <div className="about-para">
                    <h1>Web Developer</h1>
                    <p>
  Web developer with frontend skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Bootstrap</strong>.  
  Backend experience with <strong>Node.js</strong> and <strong>MongoDB</strong>.  
  Passionate about building scalable and responsive web applications, optimizing user experience, and implementing best practices in modern web development.  
  Enthusiastic about learning new technologies and solving real-life problems with code.
</p>

                </div>
<div className="about-skills">
    <div className="skills"><p>HTML & CSS</p> <hr style={{width:"50%"}}></hr></div>
    <div className="skills"><p>Javascript</p> <hr style={{width:"60%"}}></hr></div>
    <div className="skills"><p>React JS</p> <hr style={{width:"70%"}}></hr></div>
    <div className="skills"><p>Node JS</p> <hr style={{width:"60%"}}></hr></div>
    <div className="skills"><p>Mongodb</p> <hr style={{width:"50%"}}></hr></div>
</div>
            </div>
        </div>
    </div>

    
    </>
  )
}

export default About
