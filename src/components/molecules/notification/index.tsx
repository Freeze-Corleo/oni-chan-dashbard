import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToastNotification } from '../../../core-logic/usecases/notifications/notificationsUseCase';
import { selectNotificationReducer } from '../../../view-model-generation/generateNotificationModel';

import Alert from '../../atoms/Alert';

export interface IToastProps {
  color?: string;
  id: string;
  onDismissClickToast: (id: string) => void;
  text?: string;
  severityLevel?: 'error' | 'info' | 'success' | 'warning';
  severityTitle?: string;
}

export const Toast: React.FC<IToastProps> = ({
  color = '#00000',
  id,
  onDismissClickToast,
  text = '',
  severityLevel = 'success',
  severityTitle = 'default title',
}) => {
  setTimeout(() => onDismissClickToast(id), 7000);
  return (
    <li className="ml-4 mb-4 w-full rounded-lg">
      <div className="flex">
        <Alert
          color={color}
          text={text}
          severityTitle={severityTitle}
          severityLevel={severityLevel}
          id={id}
          onDismissClickToast={onDismissClickToast}
        />
      </div>
    </li>
  );
};

/**
 *
 * @returns
 */
const Toasts: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const notifications = useSelector(selectNotificationReducer);

  React.useEffect(() => {}, [notifications]);

  const onRemove = (id: string) => {
    dispatch(removeToastNotification(id));
  };
  return (
    <div className="relative">
      <ul className="fixed inset-x-0 top-4 z-50 ">
        {notifications?.data?.map((notification) => {
          const { id } = notification;
          return (
            <div key={id}>
              <Toast
                {...notification}
                onDismissClickToast={onRemove}
                id={id.toString()}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Toasts;
