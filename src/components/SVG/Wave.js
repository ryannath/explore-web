const Wave = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 174 33"
    >
      <path
        fill="#0F161C"
        d="M0 8.407l7.25-.824C14.5 6.759 29 5.068 43.5 3.421 58 1.73 72.5.083 87 .906c14.5.824 29 4.162 43.5 7.934C145 12.569 174 20.893 174 20.893v12.538H0V8.407z"
        transform="translate(0 -1.257) translate(0 .57)"
      ></path>
    </svg>
  );
}

export default Wave;