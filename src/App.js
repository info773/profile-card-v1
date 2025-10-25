import "./App.css";

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
      <Skill name="React" emoji="❤️" style={{ backgroundColor: "red" }} />
      <Skill name="Html" emoji="🏋🏻‍♀️" style={{ backgroundColor: "blue" }} />
      <Skill name="CSS" emoji="🥑" style={{ backgroundColor: "yellow" }} />
      <Skill
        name="Javascript"
        emoji="🧠"
        style={{ backgroundColor: "green" }}
      />
    </div>
  );
}

function Skill(props) {
  return (
    <span style={props.style} className="skill">
      {props.name} {props.emoji}
    </span>
  );
}

export default App;
