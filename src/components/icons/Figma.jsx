const FigmaIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      color="#fff"
    >
      <circle cx={15} cy={12} r={3} />
      <path d="M9 21a3 3 0 0 0 3-3v-3H9a3 3 0 1 0 0 6m3-12v6H9a3 3 0 1 1 0-6zm0-6v6H9a3 3 0 0 1 0-6zm0 0v6h3a3 3 0 1 0 0-6z" />
    </g>
  </svg>
)
export default FigmaIcon
