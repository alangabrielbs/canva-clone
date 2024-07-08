import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-8 shrink-0 relative flex items-center justify-center hover:opacity-75 transition">
        <svg viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            fill="#007AFF"
          ></path>{" "}
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            fill="#312ECB"
          ></path>{" "}
        </svg>
      </div>
    </Link>
  );
};
