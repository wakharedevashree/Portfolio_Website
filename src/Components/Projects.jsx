import React from 'react'
import project_data from './projects_data'
const Projects = () => {
  return (
    <div className='project-section'>
        <h1>My Projects</h1>
        <div className="project-grid">
            {project_data.map((project)=>(
                <div key={project.id} className='project-card'>
                    <img src={project.image} className="project-img" alt="" />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p><strong>Tech Stack:</strong> {project.techStack}</p>
                    <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects




// import React from 'react'
// import project_data from './projects_data'
// import './Projects.css' // Assuming you put the CSS in a separate file

// const Projects = () => {
//   return (
//     <section className='project-section' id="projects">
//       <h1>My Projects</h1>
//       <div className="project-grid">
//         {project_data.map((project) => (
//           <div key={project.id} className='project-card'>
//             <div className="project-img-container">
//               <img src={project.image} className="project-img" alt={project.title} />
//             </div>
//             <div className="project-content">
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <p><strong>Tech Stack:</strong></p>
//               <div className="tech-tags">
//                 {project.techStack.split(',').map((tech, index) => (
//                   <span key={index} className="tech-tag">{tech.trim()}</span>
//                 ))}
//               </div>
//               <div className="project-links">
//                 <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
//                 {project.liveDemo && (
//                   <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Projects