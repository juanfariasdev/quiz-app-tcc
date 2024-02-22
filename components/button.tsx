import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  layout: 'default' | 'light';
}

function setLayout(option: string) {
  let background;
  let text;
  switch (option) {
    case 'light':
      background = 'bg-primary-100 border-2 border-t-0 border-primary-300';
      text = 'text-primary-500';
      break;
    case 'default':
      background = 'bg-primary-500 border-2 border-t-0 border-primary-700';
      text = 'text-white';
      break;
  }

  return {
    background,
    text,
  };
}

export const Button = ({ title, layout = 'default', ...props }: IButtonProps) => {
  const setedLayout = setLayout(layout);

  return (
    <TouchableOpacity
      className={`px-4 py-5 items-center rounded-full ${setedLayout.background}`}
      {...props}>
      <Text className={`text-xl uppercase ${setedLayout.text}`}>{title}</Text>
    </TouchableOpacity>
  );
};
