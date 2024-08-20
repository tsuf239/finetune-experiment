# finetune-experiment #1

just a weird coding style to see if a fine tuned model can pick-up

I want the model to "pay attention" and correct over the following points-

- constants starts with C
- function names are kebab case

- constants belong to the constants file
- helper functions (like mod or subtract) belong to the helper file
- helper functions are exported as const (not export function = () => "");

It will be nice if it can catch errors-
here for example: ```
export const multiply = (...args: number[]) => {
return args.reduce((sum, arg) => sum \* arg, 0);
};

```
the model should tell me that I have a zero as initial value (chatGPT could!)
```
