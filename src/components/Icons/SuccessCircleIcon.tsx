import { SVGProps } from 'react';

export function SuccessCircleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" fill="#106d2b" r="12" />
      <path
        d="m17.8 8.897-7.037 7.037a.485.485 0 0 1-.417.204.616.616 0 0 1-.439-.182l-3.725-3.725a.62.62 0 1 1 .878-.878l3.286 3.287 6.597-6.596a.62.62 0 0 1 .878 0 .575.575 0 0 1-.022.853z"
        fill="#fff"
      />
    </svg>
  );
}
