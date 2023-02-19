import * as React from "react"

interface Props{
      width?:number
      height?:number
      fill?:string
  
}

const Menu=({height=48,width=48,fill='#fff',...props}:Props)=> {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.5}
        y={0.5}
        width={47}
        height={47}
        rx={5.5}
        stroke={fill}
        strokeOpacity={0.295743}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 18a1 1 0 011-1h14a1 1 0 110 2H17a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H17a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H17z"
        fill={fill}
      />
    </svg>
  )
}

export default Menu