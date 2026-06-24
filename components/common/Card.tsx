import { CardProps } from "@/interfaces";

export default function Card({ className, children }: CardProps) {
  return <div className={className}>{children}</div>;
}
