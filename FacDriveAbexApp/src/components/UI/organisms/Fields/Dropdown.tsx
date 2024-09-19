import { Dropdown, DropdownProps } from '../../atoms/Dropdown';
import { WrapperField, WrapperFieldProps } from '../../atoms/WrapperField';

type Props = DropdownProps & Omit<WrapperFieldProps, 'children'>;

export const DropdownField = ({
  errorMessage,
  hasSubmitted,
  size,
  ...props
}: Props) => {
  return (
    <WrapperField
      errorMessage={errorMessage}
      hasSubmitted={hasSubmitted}
      size={size}
    >
      <Dropdown {...props} />
    </WrapperField>
  );
};
