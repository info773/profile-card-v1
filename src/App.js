import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="/me.JPG" alt="Not actually me"></img>
      <p className="small">Is it tho?</p>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Felix Behrens</h1>
      <p>
        Hobbyist trying to create some usefull stuff while trying to have fun.
        Also I need more text so it looks similar to the example of Jonas. May
        just another sentence, then we'll be fine.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill name="React" emoji="❤️" style={{ backgroundColor: "red" }} /> */}
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </div>
  );
}

function Skill({ skillObj }) {
  let emoji = "";

  switch (skillObj.level) {
    case "beginner":
      emoji = "👶";
      break;
    case "intermediate":
      emoji = "👍";
      break;
    case "advanced":
      emoji = "💪";
      break;
    default:
      emoji = "🥑";
  }

  return (
    <span style={{ backgroundColor: skillObj.color }} className="skill">
      {skillObj.skill} {emoji}
    </span>
  );
}

export default App;
