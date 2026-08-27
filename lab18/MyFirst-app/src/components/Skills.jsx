import SkillProgress from "./SkillProgress";

function Skills() {
  const skills = [
    { id:1 ,name: "HTML", progress: 95 },
    { id:2,name: "CSS", progress: 95 },
    { id:3,name: "JavaScript", progress: 80 },
    { id:4,name: "React", progress: 80 },
    { id:5,name: "Photoshop", progress: 95 },
    { id:6,name: "Adobe XD", progress: 80 },
    { id:7,name: "Node.js", progress: 75 },
    {id:8, name: "WordPress", progress: 70 },
  ];

  return (
    <section className="skills-section">
      <h2>Skills</h2>

      <p className="skills-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>

      <div className="skills-container">
        <div className="focus">
          <h4>MY FOCUS</h4>

          <p>UI/UX Design</p>
          <p>Responsive Design</p>
          <p>Web Design</p>
          <p>Mobile App Design</p>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <SkillProgress key={skill.id} name={skill.name} progress={skill.progress} />
          ))}
          
        </div>
      </div>
    </section>
  );
}

export default Skills;