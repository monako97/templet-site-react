declare module '*.less';
declare module '*.css';
declare module '*.js';
declare module '*.ts';
declare module '*.png';
declare module './index.less' {
  const styles: Record<string, string>;

  export default styles;
}

declare const routeBaseName: string;

declare const version: string;

declare const projectName: string;

interface PureComponentProps {
  path: string;
}
