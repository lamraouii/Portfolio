export type ExperienceKind = "work" | "education" | "certification";

export interface ExperienceEntry {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  kind: ExperienceKind;
  current?: boolean;
}
