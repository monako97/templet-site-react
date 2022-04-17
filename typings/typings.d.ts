declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}
interface Window {
  rootInstance: {
    render(children: React.ReactChild | Iterable<React.ReactNode>): void;
    unmount(): void;
  };
}
interface PureComponentProps {
  path: string;
  selfUrl: string;
}
