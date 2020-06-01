import React from "react";

interface KeySelectorProps {
  callback: () => void;
}
const KeySelector: React.FC<KeySelectorProps> = ({ callback }) => {
  return <select></select>;
};

export default KeySelector;
