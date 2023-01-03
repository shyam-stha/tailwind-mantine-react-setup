import { MultiSelect } from '@mantine/core'
import { useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'

const MultiSelectField = ({ name, ...props }: any) => {
    const { control } = useFormContext()
    const {
        field,
        fieldState: { error },
    } = useController({ name, control })

    return (
        <MultiSelect
            {...field}
            {...props}
            error={error?.message}
        />
    )
}

export default MultiSelectField
