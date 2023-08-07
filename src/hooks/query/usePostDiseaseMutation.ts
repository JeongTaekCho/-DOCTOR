import { useMutation } from '@tanstack/react-query';
import * as API from '../../api/index';

interface PostDiseaseData {
  diseases: File;
}

interface DiseaseReturn {
  message: string;
}

const postDisease = async (data: PostDiseaseData): Promise<DiseaseReturn> => {
  return API.formPost<DiseaseReturn, PostDiseaseData>('/diseases', data);
};

export const usePostDiseaseMutation = () => {
  return useMutation(postDisease);
};
