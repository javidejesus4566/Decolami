import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const toastifySuccess = () => {
    toast.success('Correo Enviado exitosamente!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: 'submit-feedback success',
        toastId: 'notifyToast'
    });
};
