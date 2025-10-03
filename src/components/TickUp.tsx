import * as React from 'react'

export function TickUpLogo({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 180 60"
      role="img"
      aria-label="TickUp logo"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Ícone */}
      <circle
        cx="30"
        cy="30"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M18 30 L27 38 L42 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Texto */}
      <text
        x="65"
        y="38"
        fontFamily="Poppins, Arial, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="currentColor"
      >
        Tick<tspan className="text-accent-foreground">Up</tspan>
      </text>
    </svg>
  )
}

export function TickUpLogoMono({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 180 60"
      role="img"
      aria-label="TickUp logo monocromático"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="30"
        cy="30"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M18 30 L27 38 L42 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="65"
        y="38"
        fontFamily="Poppins, Arial, sans-serif"
        fontSize="28"
        fontWeight="600"
        fill="currentColor"
      >
        TickUp
      </text>
    </svg>
  )
}

export function TickUpIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 60"
      role="img"
      aria-label="TickUp ícone"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle
        cx="30"
        cy="30"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        d="M18 30 L27 38 L42 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
