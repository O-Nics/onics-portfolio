import skillData from "@/data/skills.json";
import { Skill, SkillsData} from "@/types";


export function getAllSkills(): Skill[] {
  return (skillData as unknown as SkillsData).skills;
}
