import { Button } from 'antd';
import type { ButtonType } from 'antd/lib/button';

const ActionBuilder = (actions: BasicListApi.Action[] | undefined) => {
  return (actions || []).map((action) => {
    if (action.component === 'button') {
      return (
        <Button type={action.type as ButtonType} key={action.text}>
          {action.text}
        </Button>
      );
    }
    return null;
  });
};
export default ActionBuilder;
