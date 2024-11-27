import { SVGProps } from "react";

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M13.0257 6.35901C13.0257 5.79171 12.5673 5.33337 12 5.33337C11.4327 5.33337 10.9744 5.79171 10.9744 6.35901V10.9744H6.35901C5.79171 10.9744 5.33337 11.4327 5.33337 12C5.33337 12.5673 5.79171 13.0257 6.35901 13.0257H10.9744V17.6411C10.9744 18.2083 11.4327 18.6667 12 18.6667C12.5673 18.6667 13.0257 18.2083 13.0257 17.6411V13.0257H17.6411C18.2083 13.0257 18.6667 12.5673 18.6667 12C18.6667 11.4327 18.2083 10.9744 17.6411 10.9744H13.0257V6.35901Z" />
    </svg>
  );
}
