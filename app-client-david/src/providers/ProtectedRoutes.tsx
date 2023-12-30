import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { RootState } from '../redux/store';

function Protected({ children }: any) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  console.log(isAuthenticated)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Please login first',
        showConfirmButton: false,
        timer: 1000,
      });
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}

export default Protected;
