"use client"

interface ArticlesIconSvgProps {
    width: string
    height: string
    className: string
}

export const ArticlesIconSvg = ({ width, height, className }: ArticlesIconSvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 17"
            focusable="false"
            aria-busy="false"
            fill="none"
            width={width}
            height={height}
        >
            <path
                d="m11 9.5h5v1h-5v-1zm5-5h-12v3h12v-3zm-5 8h5v-1h-5v1zm9-12v13c0 1.657-1.343 3-3 3h-14c-1.657 0-3-1.343-3-3v-13h20zm-2 2h-16v11c0 0.552 0.449 1 1 1h14c0.551 0 1-0.448 1-1v-11zm-9 7h-5v3h5v-3z"
                fill="currentColor"
                fillOpacity=".9"
                className={className}
            />
        </svg>
    )
}