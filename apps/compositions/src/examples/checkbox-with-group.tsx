import { CheckboxGroup, Fieldset, Stack } from "@chakra-ui/react"
import { Checkbox } from "compositions/ui/checkbox"

export const CheckboxWithGroup = () => {
  return (
    <Fieldset.Root>
      <CheckboxGroup defaultValue={["react"]} name="framework">
        <Fieldset.Legend fontSize="sm" mb="2">
          Select framework
        </Fieldset.Legend>
        <Stack align="flex-start">
          <Checkbox value="react">React</Checkbox>
          <Checkbox value="svelte">Svelte</Checkbox>
          <Checkbox value="vue">Vue</Checkbox>
          <Checkbox value="angular">Angular</Checkbox>
        </Stack>
      </CheckboxGroup>
    </Fieldset.Root>
  )
}