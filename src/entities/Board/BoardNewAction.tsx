import React, { SyntheticEvent } from 'react'
import { Box, Button } from '@admin-bro/design-system'
import {
  ActionProps,
  BasePropertyComponent,
  useRecord,
  ViewHelpers,
} from 'admin-bro'

import { useHistory } from 'react-router-dom'

const MyRecordActionComponent: React.FC<ActionProps> = (props: ActionProps) => {
  const { record: initialRecord, resource } = props

  const { record, handleChange, submit } = useRecord(initialRecord, resource.id)
  const history = useHistory()

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    submit().then(() => {
      const helper = new ViewHelpers()
      const resourceUrl = helper.resourceUrl({ resourceId: 'Board' })
      history.push(resourceUrl)
    })
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <BasePropertyComponent
        where="edit"
        onChange={handleChange}
        property={resource.properties.name}
        resource={resource}
        record={record}
      />
      <BasePropertyComponent
        where="edit"
        onChange={handleChange}
        property={resource.properties.details}
        resource={resource}
        record={record}
      />
      <Button variant="primary" size="lg">
        Salvar
      </Button>
    </Box>
  )
}
export default MyRecordActionComponent
