const FeaturedBackground = ({ className }) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="1577"
      fill="none"
      viewBox="0 0 1920 1577"
    >
      <path
        fill="url(#paint0_linear)"
        d="M0 220.681h1920V1577H0V220.681z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        fillRule="evenodd"
        d="M0 46.544l107 22.469c106 23.272 320 69.815 533 69.815s427-46.543 640-77.037c213-31.297 427-46.544 533-53.766L1920 0v231.113H0V46.543z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="960"
          x2="960"
          y1="0"
          y2="1556"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFFFE1"></stop>
          <stop offset="0.504" stopColor="#A5FFDF"></stop>
          <stop offset="1" stopColor="#A5FFDF"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="960"
          x2="960"
          y1="0"
          y2="1556"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DFFFE1"></stop>
          <stop offset="0.504" stopColor="#A5FFDF"></stop>
          <stop offset="1" stopColor="#A5FFDF"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default FeaturedBackground;
