import * as React from "react"

interface Props{
    width?:number
    height?:number
  fill?:string
    
}

const LogoGarage=({height=44,width=46,fill='#EF6D58',...props}:Props)=> {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 46 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.114 17.538L23 3.09l19.886 14.448-7.596 23.378H10.71L3.113 17.54z"
        stroke={fill}
        strokeWidth={5}
      />
    </svg>
  )
}

export default LogoGarage
