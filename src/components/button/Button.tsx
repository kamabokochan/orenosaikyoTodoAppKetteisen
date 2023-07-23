import styles from "./Button.module.scss";

type Props = {
  onClick: () => void;
  children: string;
  color?: "complete" | "delete";
  testId?: string;
};

export const Button = ({ onClick, children, color, testId = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, styles[color]].join(" ")}
      data-testid={testId}
    >
      {children}
    </button>
  );
};
