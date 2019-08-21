import React from 'react'
import TypoGraphy from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


export default function Description(props) {
  return (
    <TypoGraphy>
      <Box component='text' fontSize="14px" fontWeight="300">
        {props.content}
      </Box>
    </TypoGraphy>
  );
}
