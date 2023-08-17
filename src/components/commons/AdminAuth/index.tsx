import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUsersQuery } from '../../../hooks/query/useGetUsersQuery';
import Swal from 'sweetalert2';
import { tokenAtom } from '../../../atoms/atoms';
import { useAtomValue } from 'jotai';

const adminAuth = (Components: any) => {
  const AdminAuth = (props: any) => {
    const navigate = useNavigate();
    const { data: userData } = useGetUsersQuery();
    const auth = useAtomValue(tokenAtom);

    useEffect(() => {
      if (userData || !auth) {
        if (userData?.user?.role !== 'admin' || !auth) {
          navigate('/');
          Swal.fire('관리자 권한이 없습니다.');
        }
      }
    }, [userData]);

    return <Components {...props} />;
  };

  return AdminAuth;
};

export default adminAuth;
