interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
};

const DocsPage = ({ params, searchParams }: PageProps) => {
  return (
    <div>Docs {JSON.stringify(params)} {JSON.stringify(searchParams)}</div>
  );
}

export default DocsPage