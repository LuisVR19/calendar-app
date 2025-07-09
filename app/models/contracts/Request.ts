export interface Request<TFilter, TData = unknown> {
  filter: TFilter;
  data: TData;
}
