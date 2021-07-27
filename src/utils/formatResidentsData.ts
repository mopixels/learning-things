export const formatResidentsData = (neighbours: string[] | undefined) =>
  neighbours?.map((resident: string) =>
    resident.substr(resident.lastIndexOf("/") + 1)
  );
