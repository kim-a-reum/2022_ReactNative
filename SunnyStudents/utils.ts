export const makeStudentImg = (img: string, width: string = "w200") => {
  return `https://image.tmdb.org/t/p${width}${img}`;
};
