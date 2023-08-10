export const formatDate = (dateString: any) => {
  const date = new Date(dateString);
  // const options: any = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
  return date.toISOString().split('T')[0];
};
