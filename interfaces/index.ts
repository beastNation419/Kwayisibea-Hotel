export interface ButtonProps {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
  onClick?: () => void;
}

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export interface GetTreeProps {
  image: string;
  name: string;
  desc: string;
}
