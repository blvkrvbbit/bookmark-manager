import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import TextArea from "../../components/TextArea/TextArea";
import "./base-components.styles.css";

const BaseComponents = () => {
  return (
    <div className="base-components-container">
      <Logo lightMode={true} />
      {/* <Logo lightMode={false} /> */}
      {/* <Input
        label="URL"
        placeholder="Search"
        icon="/icons/icon-search.svg"
        hint="This is a hint to help user."
      />
      <TextArea
        label="URL"
        placeholder="Search"
        icon="/icons/icon-search.svg"
        hint="This is a hint to help user."
      /> */}
      <Button>Button CTA</Button>
      <Button variant="secondary">Button CTA</Button>
      <Button variant="danger">Button CTA</Button>
    </div>
  );
};

export default BaseComponents;
