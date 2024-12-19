import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface Option {
  value: string;
  label: string;
}

interface SegmentControlProps {
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

export function SegmentControl({
  options,
  value,
  onChange,
}: SegmentControlProps) {
  return (
    <ToggleGroup.Root
      type="single"
      value={value}
      onValueChange={(newValue) => {
        if (newValue) onChange(newValue);
      }}
      className="flex bg-gray-100 rounded-lg p-1"
    >
      {options.map(({ label, value: optionValue }) => (
        <ToggleGroup.Item
          key={optionValue}
          value={optionValue}
          className={`flex-1 py-2 px-4 text-center cursor-pointer rounded-md text-sm transition-colors duration-200
            ${
              optionValue === value
                ? "bg-red-500 text-white font-bold"
                : "bg-transparent text-gray-700 hover:bg-gray-200"
            }`}
        >
          {label}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
