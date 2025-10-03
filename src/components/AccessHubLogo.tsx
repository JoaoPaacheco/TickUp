import * as React from "react"

export function AccessHubLogo({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 128 128"
      role="img"
      aria-label="AccessHub logo"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g transform="translate(64 64)">
        {/* círculo do hub */}
        <circle
          cx="0"
          cy="0"
          r="52"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
        />

        {/* setas convergindo para o centro */}
        <g
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          fill="currentColor"
        >
          {/* seta 0° */}
          <line x1="0" y1="-52" x2="0" y2="-28" />
          <path d="M -8 -28 L 0 -14 L 8 -28 Z" />

          {/* seta 60° */}
          <g transform="rotate(60)">
            <line x1="0" y1="-52" x2="0" y2="-28" />
            <path d="M -8 -28 L 0 -14 L 8 -28 Z" />
          </g>

          {/* seta 120° */}
          <g transform="rotate(120)">
            <line x1="0" y1="-52" x2="0" y2="-28" />
            <path d="M -8 -28 L 0 -14 L 8 -28 Z" />
          </g>

          {/* seta 180° */}
          <g transform="rotate(180)">
            <line x1="0" y1="-52" x2="0" y2="-28" />
            <path d="M -8 -28 L 0 -14 L 8 -28 Z" />
          </g>

          {/* seta 240° */}
          <g transform="rotate(240)">
            <line x1="0" y1="-52" x2="0" y2="-28" />
            <path d="M -8 -28 L 0 -14 L 8 -28 Z" />
          </g>

          {/* seta 300° */}
          <g transform="rotate(300)">
            <line x1="0" y1="-52" x2="0" y2="-28" />
            <path d="M -8 -28 L 0 -14 L 8 -28 Z" />
          </g>
        </g>
      </g>
    </svg>
  )
}
