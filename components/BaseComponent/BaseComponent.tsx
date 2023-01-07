export interface IBaseComponent {
  text: string;
  darkmode?: boolean;
}

const BaseComponent: React.FC<IBaseComponent> = ({ text, darkmode }) => {
  return <p className={`${darkmode ? "bg-black" : ""} text-red-500`}>{text}</p>;
};

export default BaseComponent;
