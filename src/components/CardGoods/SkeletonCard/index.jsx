import React from 'react'
import { Box, Skeleton, Stack } from '@mui/material'

export const SkeletonCard = ({idx}) => {
  return (
    <Stack key={idx} spacing={1} sx={{ mt: "35px" }}>
      <Skeleton animation={"wave"} variant='circular' width={"260px"} height={"260px"} />
      <Skeleton animation={"wave"} variant='rounded' width={"260px"} height={"25px"} />
      <Skeleton animation={"wave"} variant='rounded' width={"260px"} height={"100px"} />
      <Box width={"100%"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Skeleton animation={"wave"} variant='rounded' width={"70px"} height={"20px"} />
        <Skeleton animation={"wave"} variant='rounded' width={"100px"} height={"30px"} />
      </Box>
    </Stack>
  )
}
