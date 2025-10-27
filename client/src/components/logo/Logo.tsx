import lightIcon from "../../assets/images/logo-light-theme.svg";
import darkIcon from "../../assets/images/logo-dark-theme.svg";

type Props = {
  lightMode?: boolean;
};

const Logo = ({ lightMode = true }: Props) => {
  return <img src={lightMode ? lightIcon : darkIcon} alt="Logo" />;
};

export default Logo;
