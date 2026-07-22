export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationEntry {
  title: string;
  issuer: string;
  year: string;
  credential?: string;
}
