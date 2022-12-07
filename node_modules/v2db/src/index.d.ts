export = Index;
declare function Index(options?: {
  name?: string;
  seperator?: '.' | '-' | '_' | ',';
  language?: 'en' | 'tr';
  yaml?: boolean;
}): {
  set(key: string, value: any): any;
  get(key: string): any;
  fetch(key: string): any;
  delete(key: string): boolean;
  has(key: string): void;
  update(key: string, func: any): any;
  add(key: string, value: number): any;
  substract(key: string, value: number): any;
  push(key: string, ...value: any[]): any;
  unpush(key: string, ...value: any[]): any;
  all(): any;
  deleteAll(): boolean;
};
