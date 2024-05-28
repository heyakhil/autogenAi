import { TextInput } from '@mantine/core'

const RTextInput = () => {
  return (
    <TextInput
      label="Custom layout"
      inputWrapperOrder={["label", "error", "input", "description"]}
      styles={{
        input: {
          color: "#eeeeee",
          fontSize: "15px",
          borderBottom: "2px solid #EEEE",
          backgroundColor: "transparent",
          borderRadius: "0",
          borderRight: "none",
          borderLeft: "none",
          borderTop: "none",
          width: "100%",
        },
        label: {
          color: "#fff",
          width: "100%",
          textAlign: "start",
          fontSize: "15px",
        },
      }}
    />
  )
}

export default RTextInput