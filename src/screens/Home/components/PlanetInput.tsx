import React, { useRef, useState, FC } from "react";
import { Texts } from "../../../constants/texts";
import { useDebouncedCallback } from "use-debounce";
import { TextInput } from "react-native";
import { Input } from "./styled/PlanetInput";

interface Props {
  onChangeText: (text: string) => void;
}

export const PlanetInput: FC<Props> = ({ onChangeText }) => {
  const inputRef = useRef<TextInput>(null);
  const [input, setInput] = useState("");

  const onChangeTextDebounced = useDebouncedCallback(onChangeText, 200);

  return (
    <Input
      ref={inputRef}
      onChangeText={(text) => {
        setInput(text);
        onChangeTextDebounced(text.trim());
      }}
      placeholder={Texts.Home.searchPlanetPlaceholder}
      value={input}
      autoCapitalize={"sentences"}
    />
  );
};
