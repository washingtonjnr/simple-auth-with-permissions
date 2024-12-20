interface LogoProps {
  color?: string;
  className?: string;
}

export function Logo({ className, color = "#F20024" }: LogoProps) {
  return (
    <svg
      width="512"
      height="512"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 40, height: 40 }}
      className={className}
    >
      <rect width="512" height="512" fill={color} />
      <path
        d="M66.7056 147.929L75.2345 200.882C126.408 190.49 177.582 184.551 231.016 183.066V383H281.779V183.066C335.007 184.551 386.797 190.49 437.765 200.758L446.294 147.806C384.742 135.434 321.546 129 256.911 129C191.865 129 128.566 135.434 66.7056 147.929Z"
        fill="white"
      />
    </svg>
  );
}
