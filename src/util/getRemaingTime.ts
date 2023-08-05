export const calculateRemainingDays = (date: string | number | Date) => {
  const blockedDate = new Date(date);
  const currentDate = new Date();

  // 정지 기간이 지난 경우
  if (blockedDate <= currentDate) {
    return 0;
  }

  // 남은 일 수 계산
  const timeDiff = blockedDate.getTime() - currentDate.getTime();
  const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return remainingDays;
};
