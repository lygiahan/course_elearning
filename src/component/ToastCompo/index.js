import { notification } from 'antd';

export const  ToastCompo =(action,des)=> {
    switch (action) {
      case 'success':
        return notification.success({
          description:des,
          duration:2
        });
      case 'info':     
      return notification.info({
        description:des,
        duration:2

      });
     case 'fail':
     return notification.error({
        description:des,
        duration:2

      });
    case 'warning':
      return notification.warning({
        message:des,
        duration:2

      });
      default:
        return;
    }
}



