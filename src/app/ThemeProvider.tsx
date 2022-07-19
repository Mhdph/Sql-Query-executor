import { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {
  children: JSX.Element;
};

export default function ThemeProvider({ children }: Props) {
  const theme = useSelector((state: any) => state.theme.theme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return <div className={`${theme}`}>{children}</div>;
}
