import skillData from "@/data/skills.json";
import { Locale, Skill, SkillRaw, SkillsDataRaw } from "@/types";

export function getAllSkills(locale : Locale = "fr"): Skill[] {
  const data = skillData as SkillsDataRaw;

  return data.skills.map((skill: SkillRaw) => {
    return ({
      ...skill,
      title: skill.title[locale] || skill.title.fr,
      items: skill.items.map((item) => ({
        ...item,
        name:
          typeof item.name === "string"
            ? item.name
            : item.name[locale] || item.name.fr,
      })),
    });
  });
}
