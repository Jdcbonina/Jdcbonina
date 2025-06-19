import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative mx-auto my-10 w-full max-w-7xl px-6",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Container.displayName = "Container";

export default Container;
