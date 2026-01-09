export type Response<T> = {
  data: T;
  isLoading: boolean;
  error: Error | null;
};
