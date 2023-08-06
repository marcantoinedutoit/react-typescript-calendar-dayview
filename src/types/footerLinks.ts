export interface IFooterLinks extends Array<ILink> {}

export interface IContent {
  title: string;
  href: string;
}

export interface ILink {
  title: string;
  contents: Array<IContent>;
}
