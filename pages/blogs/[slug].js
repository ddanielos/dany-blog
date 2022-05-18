import PageLayout from "components/PageLayout";
//import { useRouter } from 'next/router'
import { getBlogBySlug, getAllBlogs } from 'lib/api'

const BlogDetail = ({blog}) => {
  //const { query } = useRouter();
  return (
    <PageLayout>
      {/*<h1>{query?.slug}</h1>*/}
      <h1>{blog?.slug}</h1>
    </PageLayout>
  )
}

export async function getStaticProps({params}) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {blog}
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  
  return {
    paths: [
      { params: {slug: 'cervezas-frias-o-muy-frias'} },
      { params: {slug: 'brew-pubs-en-america-latina'} },
      { params: {slug: 'cervezas-en-el-mundo'} }
    ],
    fallback: false
  }
}

export default BlogDetail;