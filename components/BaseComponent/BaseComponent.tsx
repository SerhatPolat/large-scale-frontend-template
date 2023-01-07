export interface IBaseComponent {
  text: string;
}

const BaseComponent: React.FC<IBaseComponent> = ({ text }) => {
  return <p className="text-red-500">{text}</p>;
};

export default BaseComponent;
