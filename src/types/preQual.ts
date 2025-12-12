export interface PreQualData {
  name: string
  email: string
  projectDescription: string
  budget: 'under-8k' | '8k-15k' | '15k-30k' | '30k-plus' | 'flexible'
  timeline: 'this-week' | '2-4-weeks' | 'flexible' | 'exploring'
  previousAttempts: Array<
    'nothing' | 'no-code' | 'agencies' | 'freelancers' | 'in-house'
  >
}

export interface QualificationResult {
  fit: 'great' | 'possible' | 'not-a-fit'
  score: number
  message: string
  reasoning: string[]
  action: 'book-cal' | 'book-cal-with-note' | 'show-alternatives'
}
