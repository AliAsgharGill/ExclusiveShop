import PropTypes from "prop-types";
import { Input } from "antd";

const InputBox = ({
  className,
  addonAfter,
  addonBefore,
  allowClear,
  bordered,
  defaultValue,
  disabled,
  maxLength,
  showCount,
  status,
  prefix,
  size,
  suffix,
  type,
  value,
  placeholder,
}) => (
  <Input
    className={className}
    addonAfter={addonAfter}
    addonBefore={addonBefore}
    allowClear={allowClear}
    bordered={bordered}
    defaultValue={defaultValue}
    showCount={showCount}
    size={size}
    disabled={disabled}
    maxLength={maxLength}
    status={status}
    prefix={prefix}
    suffix={suffix}
    type={type}
    value={value}
    placeholder={placeholder}
  />
);

InputBox.propTypes = {
  addonAfter: PropTypes.node,
  addonBefore: PropTypes.node, // Add this line for addonBefore
  allowClear: PropTypes.bool,
  bordered: PropTypes.bool,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  showCount: PropTypes.bool,
  status: PropTypes.string,
  prefix: PropTypes.node,
  size: PropTypes.string,
  suffix: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
};

export default InputBox;
