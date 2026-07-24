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
  credentialUrl?: string;
  imageUrl?: string;
}

export interface VolunteeringEntry {
  id: string;
  role: string;
  event: string;
  institution: string;
  description: string;
  date: string;
  images: string[];
  tags?: string[];
  detailsUrl?: string;
}
