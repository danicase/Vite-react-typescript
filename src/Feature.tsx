interface FeatureProps {
  title: string;
  children?: JSX.Element;
  ease?: string;
  looks?: string;
  style?: string;
  integration?: string;
  href?: string;
}
export const Features = ({
  title,
  children,
  ease,
  looks,
  style,
  integration,
  href,
}: FeatureProps) => (
  <section>
    <h1>{title}</h1>
    {children}
    <ul>
      <li>Ease of use {ease ? ease : ''}</li>
      <li>Default look and feel {looks ? looks : ''}</li>
      <li>Easy to style {style ? style : ''}</li>
      <li>Ease of intergation {integration ? integration : ''}</li>
      <li>
        <a href={href}>Documentation</a>
      </li>
    </ul>
  </section>
);
