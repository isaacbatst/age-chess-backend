import { Box, Button } from '@admin-bro/design-system'
import { ActionProps, BasePropertyComponent, useRecord, ViewHelpers } from 'admin-bro'
import { Console } from 'console'
import { SyntheticEvent } from 'react'
import { useHistory } from 'react-router-dom'

const MyRecordActionComponent = (props: ActionProps) => {
  const { record: initialRecord, resource, action } = props

  const { record, handleChange, submit, isSynced } = useRecord(initialRecord, resource.id) 
  let history = useHistory();

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(record)
    submit().then(() => {
      const helper = new ViewHelpers();
      const resourceUrl = helper.resourceUrl({ resourceId: 'Board' });
      history.push(resourceUrl)
    })
  }
  console.log(record, isSynced)

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
    >
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