export default function TechhubLogo({
  width = 200,
  height = 60,
  className = ''
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Shape */}
      <rect x="10" y="10" width="40" height="40" rx="8" fill="#000000" />

      {/* Network/Hub Icon */}
      <circle cx="30" cy="30" r="8" fill="white" />
      <line
        x1="30"
        y1="18"
        x2="30"
        y2="22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="30"
        y1="38"
        x2="30"
        y2="42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="18"
        y1="30"
        x2="22"
        y2="30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="38"
        y1="30"
        x2="42"
        y2="30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="21.8"
        y1="21.8"
        x2="24.6"
        y2="24.6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="35.4"
        y1="35.4"
        x2="38.2"
        y2="38.2"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="21.8"
        y1="38.2"
        x2="24.6"
        y2="35.4"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="35.4"
        y1="24.6"
        x2="38.2"
        y2="21.8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Company Name */}
      <text
        x="60"
        y="36"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="bold"
        fill="#333333"
      >
        Tech<tspan fill="#000000">hub</tspan>
      </text>

      {/* Tagline */}
      <text
        x="60"
        y="48"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fill="#666666"
      >
        Innovative IT Solutions
      </text>
    </svg>
  );
}
