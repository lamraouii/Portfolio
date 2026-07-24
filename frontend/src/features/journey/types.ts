export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
  current?: boolean;
}

export type JourneyKind = 'education' | 'internship';

export interface AcademicJourneyData {
  education: TimelineEntry[];
  internships: TimelineEntry[];
}
