import { LetterAv2 } from "../letters";

const GradeA = () => {
  const gradientId = "paint0_linear_letter_a";
  const fill = `url(#${gradientId})`;
  return (
    <div className="relative w-full h-full">
      <svg width="0" height="0" viewBox="0 0 0 0">
        <defs>
          <linearGradient
            id={gradientId}
            x1="25.9267"
            y1="-5.203e-07"
            x2="46.0733"
            y2="72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FDF6A1" />
            <stop offset="0.5" stopColor="#FEF8D8" />
            <stop offset="0.5" stopColor="#F1BC43" />
            <stop offset="1" stopColor="#FDF6A1" />
          </linearGradient>
        </defs>
      </svg>
      <LetterAv2 fill={fill} />
    </div>
  );
};

export default GradeA;
