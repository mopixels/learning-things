export const formatResidentsData = (neighbours: string[]) =>
  neighbours?.map((resident: string) =>
    resident.substr(resident.lastIndexOf('/') + 1)
  )
