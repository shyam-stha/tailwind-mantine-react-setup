import { TextInput } from '@mantine/core'
import { useController, useFormContext } from 'react-hook-form'

const TextInputField = ({ name, rules, ...props }: any) => {
    const { control } = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({ name, control, defaultValue: '' })
    return (
        <TextInput
            {...props}
            {...field}
            error={error?.message}
        />
    )
}

export default TextInputField
