function SkillProgress({ name, progress }) {
  return (
    <div className="skill">
      <div className="skill-name">{name}</div>

      <div className="skill-progress">
        <div className="skill-progress-fill" style={{ width: `${progress}%` }}  ></div>
      </div>
    </div>
  );
}

export default SkillProgress;