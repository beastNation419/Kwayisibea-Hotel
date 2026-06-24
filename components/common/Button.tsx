import { ButtonProps } from "@/interfaces";

export default function Button({
  children,
  size,
  shape,
  onClick,
}: ButtonProps) {
  const sizes = {
    small: "px-4 py-1",
    medium: "px-6 py-1",
    large: "px-8 py-1",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-green-600 text-white rounded-full hover:bg-green-700 cursor-pointer transition duration-300 hover:scale-90 ${sizes[size]} ${shape}`}
    >
      {children}
    </button>
  );
}
