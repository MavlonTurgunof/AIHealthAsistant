export const analyzeSymptoms = (symptomText) => {
  const lower = symptomText.toLowerCase();

  if (lower.includes("rash") || lower.includes("acne")) {
    return "Dermatologist";
  }
  if (lower.includes("chest pain") || lower.includes("heart")) {
    return "Cardiologist";
  }

  return "General Practitioner";
};
