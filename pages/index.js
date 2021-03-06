import { Row, Col } from 'react-bootstrap'
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';

export default function Home({blogs}) {
  return (
      <PageLayout>
        <AuthorIntro />
        <hr/>
        {/* className from props */}
        <Row className="mb-5">
          <Col md="10">
            <CardListItem />
          </Col>
          {
            blogs.map(blog=>
              <Col key={blog.slug} md="4">
                <CardItem 
                  author={blog.author}
                  title={blog.title}
                  subtitle={blog.subtitle}
                  date = {blog.date}
                  coverImage={blog.coverImage}
                  link = {{
                    href: '/blogs/[slug]',
                    as: `/blogs/${blog.slug}`
                  }}
                />
              </Col>
            )
          }
        </Row>        
      </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps(){
  //console.log('calling getStaticProps');
  const blogs = await getAllBlogs();
  return{
    props: {
      blogs
    }
  }
}

// To craate dynamic page:
// This is called at request time
/*
export async function getServerSideProps(){
  console.log('calling getStaticProps');
  const blogs = await getAllBlogs();
  return{
    props: {
      blogs
    }
  }
}
*/


/*
 Static page
 Faster, can be cached using CDN
 Created at build time
 When we making the request we are always receiving the same html document

 Dynamic Page
 Created at request time (we can fetch data on server)
 Little bit slower, the time depends on data you are fetching
*/

