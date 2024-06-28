export const Timeleft = (time) => {
  const projectEndDate = new Date(time);
  const projectEndMilliSec = projectEndDate.getTime();

  const currentMillisec = new Date().getTime();
  
  if (projectEndMilliSec > currentMillisec) {
    const Timeleft = projectEndMilliSec - currentMillisec;
    return Timeleft;
  } else {
    return 0;
  }
};
