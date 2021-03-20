import { ITabConfig } from './index';
import { TabComponent } from './components';

interface ITabProps<T extends string | number> extends ITabConfig<T> {
  isActive: boolean;
}

export function Tab<T extends string | number>({ title, action, id, isActive }: ITabProps<T>) {
  return (
    <TabComponent isActive={isActive} onClick={() => action(id)}>
      {title}
    </TabComponent>
  );
}
