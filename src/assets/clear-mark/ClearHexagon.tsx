const ClearHexagon = ({ markType }: { markType: string }) => {
  return (
    <svg
      className="clear-hexagon"
      viewBox="0 0 150 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7087 75.1314L47.9201 28L102.343 28L129.554 75.1314L102.343 122.263L47.9201 122.263L20.7087 75.1314Z"
        fill="var(--mark-outer-fill)"
        stroke="var(--mark-outer-stroke)"
      />
      <path
        d="M29.7502 75.1314L52.4408 35.8301L97.822 35.8301L120.513 75.1314L97.822 114.433L52.4408 114.433L29.7502 75.1314Z"
        fill={`url(#hex_linear_2_${markType})`}
        stroke={`url(#hex_linear_1_${markType})`}
        strokeWidth="8"
      />
      <path
        d="M46.2861 75.1314L60.7087 50.1506L89.554 50.1506L103.977 75.1314L89.554 100.112L60.7087 100.112L46.2861 75.1314Z"
        fill="#111111"
        stroke="var(--mark-colour-stroke-2)"
        strokeWidth="2"
      />
      <path
        d="M67.9904 62.5L82.9904 62.5L90.4904 75.4904L82.9904 88.4808L67.9904 88.4808L60.4904 75.4904L67.9904 62.5Z"
        fill={`url(#hex_linear_2_${markType})`}
      />
      <defs>
        <linearGradient
          id={`hex_linear_1_${markType}`}
          x1="75"
          y1="31.5"
          x2="75"
          y2="118.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--mark-colour-stroke-1)" />
          <stop stopColor="var(--mark-colour-stroke-2)" offset="0.5" />
          <stop stopColor="var(--mark-colour-stroke-1)" offset="1" />
        </linearGradient>
        <linearGradient
          id={`hex_linear_2_${markType}`}
          x1="75"
          y1="31.5"
          x2="75"
          y2="118.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--mark-grey-gradient-1)" />
          <stop stopColor="var(--mark-grey-gradient-2)" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ClearHexagon;
