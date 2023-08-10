export const formatDate = (dateString: any) => {
  // const options: any = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  console.log(typeof dateString);
  return dateString?.split('T')[0];
};
