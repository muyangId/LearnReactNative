export const ADDMAILANDPWD = 'ADDMAILANDPWD';
export const DELMAILANDPWD = 'DELMAILANDPWD';

export const add_mailandpwd = (inputEmailandpwd) => ({
  type: ADDMAILANDPWD,
  data: inputEmailandpwd,
});

export const del_mailandpwd = (inputEmailandpwd) => ({
  type: DELMAILANDPWD,
  data: inputEmailandpwd,
});
