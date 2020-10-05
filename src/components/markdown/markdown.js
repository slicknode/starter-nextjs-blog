import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

export function Markdown(props) {
  return (
    <div
      className={null}
      dangerouslySetInnerHTML={{__html: md.render(props.value || '')}}
    />
  );
}
