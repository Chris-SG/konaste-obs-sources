const GetGrade = (score: number) => {
  if (score < 7000000) return "D";
  if (score < 8000000) return "C";
  if (score < 8700000) return "B";
  if (score < 9000000) return "A";
  if (score < 9300000) return "A+";
  if (score < 9500000) return "AA";
  if (score < 9700000) return "AA+";
  if (score < 9800000) return "AAA";
  if (score < 9900000) return "AAA+";
  return "S";
};

export { GetGrade };
