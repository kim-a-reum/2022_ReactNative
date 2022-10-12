// 학생 이미지 url 제공함수
export const makeStudentImg = (img: string, width: string = "w200") => {
  return `https://image.tmdb.org/t/p/${width}${img}`;
};
