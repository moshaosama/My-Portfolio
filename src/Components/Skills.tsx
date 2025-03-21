import { skillLists } from "../Lists/SkillList";

const Skills = () => {
  return <>{skillLists.map((el) => el.Element)}</>;
};

export default Skills;
