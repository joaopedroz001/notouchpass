import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class Notification {
  createNotification(type, mensage) {
    switch (type) {
      case 'success':
        toast.success(mensage)
        break

      case 'error':
        toast.error(mensage)
        break

      case 'warning':
        toast.warn(mensage)
        break

      case 'info':
        toast.warn(mensage)
        break
    }
  }
}