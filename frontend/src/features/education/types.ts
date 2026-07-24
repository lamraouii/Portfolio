export type JourneyCategory = "education" | "professional";

export interface JourneyEntry {
  id: string;
  category: JourneyCategory;
  title: string;
  institution: string;
  period: string;
  description?: string;
  tags?: string[];
  current?: boolean;
}
