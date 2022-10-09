import React from 'react';

export const ReusableProvider: React.FC<{
  children: React.ReactNode;
  Context: any;
  hook: Function;
  dataHook?: any;
}> = ({children, hook, dataHook, Context}) => {
  const data = hook(dataHook);
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ReusableProvider;