/* eslint @typescript-eslint/no-explicit-any: 0 */

import { ComponentType, lazy } from "react";

const lazyLoad = <T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>
) => {
  const LazyComponent = (props: any) => {
    const Component = lazy(factory);

    return <Component {...props} />;
  };

  return LazyComponent;
};

export default lazyLoad;
