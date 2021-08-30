const Wave = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1920"
      height="303"
      fill="none"
      viewBox="0 0 1920 303"
    >
      <path
        fill="url(#wave_linear)"
        fillRule="evenodd"
        d="M0 115.757l80-12.353c80-12.352 240-37.708 400-62.414C640 15.634 800-9.07 960 3.282c160 12.352 320 62.414 480 118.977 160 55.913 320 118.327 400 149.534L1920 303H0V115.757z"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="wave_linear"
          x1="960"
          x2="960"
          y1="0"
          y2="303"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4FFEC"></stop>
          <stop offset="1" stopColor="#C0FFE4" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Wave;