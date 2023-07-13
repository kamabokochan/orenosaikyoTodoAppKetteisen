import styles from "./Button.module.scss";

type Props = {
  onClick: () => void;
  children: string;
  color?: "complete" | "delete";
};

export const Button = ({ onClick, children, color }: Props) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, styles[color]].join(" ")}
    >
      {children}
    </button>
  );
};
