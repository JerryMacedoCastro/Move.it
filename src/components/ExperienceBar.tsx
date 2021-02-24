function ExperienceBar() {
  return (
    <header className="experience-bar">
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className="current-experience" style={{ left: '50%' }}>
          300 px
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

export default ExperienceBar;