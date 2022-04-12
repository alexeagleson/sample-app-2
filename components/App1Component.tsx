import { Select } from "antd";
const { Option } = Select;

function handleChange(value: string) {
  console.log(`selected ${value}`);
}

export interface IApp1Component {}

const App1Component: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <p>This is a component that is specific to App1.</p>
      <p>
        It can use existing components from the design library or create new
        ones on top of antd
      </p>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </div>
  );
};

export default App1Component;
