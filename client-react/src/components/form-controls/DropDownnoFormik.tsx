import React, { useContext } from 'react';
import { Dropdown as OfficeDropdown, IDropdownProps, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import { ThemeContext } from '../../ThemeContext';
import { dropdownStyleOverrides } from './formControl.override.styles';
import { useWindowSize } from 'react-use';
import ReactiveFormControl from './ReactiveFormControl';
import { MessageBarType } from 'office-ui-fabric-react';

interface CustomDropdownProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: unknown, option: IDropdownOption) => void;
  upsellMessage?: string;
  infoBubbleMessage?: string;
  infoBubblePositon?: 'above' | 'right' | 'below';
  infoBubbleType?: MessageBarType.info | MessageBarType.warning | MessageBarType.error;
  errorMessage?: string;
  dirty?: boolean;
  learnMoreLink?: string;
  widthOverride?: string;
}

const DropdownNoFormik = (props: IDropdownProps & CustomDropdownProps) => {
  const { value, onChange, errorMessage, options, label, widthOverride, ...rest } = props;
  const theme = useContext(ThemeContext);
  const { width } = useWindowSize();

  const fullpage = width > 1000;

  // Multiselect conflicts with selectedKey.  For some reason
  // you can't just set selectedKey to undefined if multiselect is set,
  // so we just return different versions of the dropdown
  if (props.multiSelect) {
    return (
      <ReactiveFormControl {...props}>
        <OfficeDropdown
          aria-labelledby={`${props.id}-label`}
          ariaLabel={props.label}
          options={options}
          onChange={onChange}
          errorMessage={errorMessage}
          {...rest}
          styles={dropdownStyleOverrides(theme, fullpage, widthOverride)}
        />
      </ReactiveFormControl>
    );
  }

  return (
    <ReactiveFormControl {...props}>
      <OfficeDropdown
        selectedKey={value}
        aria-labelledby={`${props.id}-label`}
        ariaLabel={props.label}
        options={options}
        onChange={onChange}
        errorMessage={errorMessage}
        {...rest}
        styles={dropdownStyleOverrides(theme, fullpage, widthOverride)}
      />
    </ReactiveFormControl>
  );
};

export default DropdownNoFormik;
