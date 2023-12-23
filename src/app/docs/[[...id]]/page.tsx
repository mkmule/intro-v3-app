import styles from './style.module.css';

interface PageProps {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const DocsPage = ({ params, searchParams }: PageProps) => {
  return (
    <div className={styles.title}>Docs {JSON.stringify(params)} {JSON.stringify(searchParams)}</div>
  );
}

export default DocsPage