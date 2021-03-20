import { useState } from 'react';
import { Tab } from './Tab';
import { TabContainer } from './components';

type Tid = number | string;

export interface ITabConfig<T extends Tid> {
  id: T;
  title: string;
  action: (id: ITabConfig<T>['id']) => void;
}

interface ITabsProps<T extends Tid> {
  tabs: ITabConfig<T>[];
}

function Tabs<T extends Tid>({ tabs }: ITabsProps<T>) {
  const [activeTab, setActiveTab] = useState<ITabConfig<T>['id'] | null>(null);

  const handleClick = (id: ITabConfig<T>['id'], action: ITabConfig<T>['action']) => {
    setActiveTab(id);
    action(id);
  };

  return (
    <TabContainer>
      {tabs.map((item) => (
        <Tab
          isActive={activeTab === item.id}
          id={item.id}
          key={item.id}
          title={item.title}
          action={(id) => {
            handleClick(id, item.action);
          }}
        />
      ))}
    </TabContainer>
  );
}

export default Tabs;
