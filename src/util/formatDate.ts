export const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  const options: any = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('ko-kr', options).split('. ').join('-').slice(0, -1);
};
