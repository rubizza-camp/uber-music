import React from 'react'
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


export default function Title(props) {
  return (
    <TypoGraphy component="h3">
      <Box fontSize="1.9em" fontWeight={400}>
        {props.content}
      </Box>
    </TypoGraphy>
  );
}
