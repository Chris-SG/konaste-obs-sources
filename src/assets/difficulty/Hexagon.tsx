const Hexagon = ({ id }: { id: string }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 119 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#filter0_d_0_1-${id})`}>
        <path
          d="M13.9201 48.3013L36.6107 9L81.9919 9L104.682 48.3013L81.9919 87.6025L36.6107 87.6025L13.9201 48.3013Z"
          stroke={`url(#paint0_linear_0_1-${id})`}
          strokeWidth="8"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter={`url(#filter1_d_0_1-${id})`}>
        <path
          d="M5.2861 48.1314L32.2087 1.5L86.054 1.5L112.977 48.1314L86.054 94.7628L32.2087 94.7628L5.2861 48.1314Z"
          stroke="var(--colour-stroke-1)"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter={`url(#filter2_d_0_1-${id})`}>
        <path
          d="M22.8807 48.226L41.0533 16.75L77.3986 16.75L95.5713 48.226L77.3986 79.7019L41.0533 79.7019L22.8807 48.226Z"
          stroke="var(--colour-stroke-1)"
          strokeWidth="2"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id={`filter0_d_0_1-${id}`}
          x="5.30127"
          y="5"
          width="108"
          height="94.6025"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_0_1-${id}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_0_1-${id}`}
            result="shape"
          />
        </filter>
        <filter
          id={`filter1_d_0_1-${id}`}
          x="0.131393"
          y="0.5"
          width="118"
          height="103.263"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_0_1-${id}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_0_1-${id}`}
            result="shape"
          />
        </filter>
        <filter
          id={`filter2_d_0_1-${id}`}
          x="17.726"
          y="15.75"
          width="83"
          height="72.9519"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result={`effect1_dropShadow_0_1-${id}`}
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2={`effect1_dropShadow_0_1-${id}`}
            result="shape"
          />
        </filter>
        <linearGradient
          id={`paint0_linear_0_1-${id}`}
          x1="59.4417"
          y1="-9.51483"
          x2="59.1609"
          y2="106.117"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--colour-stroke-2)" />
          <stop stopColor="var(--colour-stroke-3)" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Hexagon;
