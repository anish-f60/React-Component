import { useContext } from "react"
import { SelectContext } from "./Select";

export const SelectValue = ({ placeholder, accessKey }) => {
    const { selectedItem } = useContext(SelectContext);

    return <span className="text-sm">{selectedItem?.[accessKey] || placeholder}</span>
}