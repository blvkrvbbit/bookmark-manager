import lightIcon from "../../assets/images/logo-light-theme.svg";
import darkIcon from "../../assets/images/logo-dark-theme.svg";

type Props = {
  lightMode?: boolean;
  className?: string;
};

const Logo = ({ lightMode = true, className }: Props) => {
  return (
    <img
      className={className}
      src={lightMode ? lightIcon : darkIcon}
      alt="Logo"
    />
  );
};

export default Logo;
