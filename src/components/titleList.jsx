import { Box, Text, Button, ButtonGroup } from "@chakra-ui/react";

export default function TitleList({
  titles, 
  onDeleteTitle, onEditTitle
}){
  return (
    <>
      {titles.map(title => <Box 
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        key={title.id}>
        <Text 
          marginBottom={3}
          fontSize={'sxl'}
        >{title.title}</Text>
        <ButtonGroup>
          <Button onClick={() => onDeleteTitle(title.id)}>Delete</Button>
          <Button onClick={() => onEditTitle(title.id)}>Edit</Button>
        </ButtonGroup>
      </Box>)}
    </>
  );
}