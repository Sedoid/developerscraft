import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import {getPosts,getPostDetails} from '../../services'
import { useRouter } from 'next/dist/client/router'
import {Comments,CommentForm,PostDetail,PostWidget,Author,Categories,Loader,Advertisement} from '../../components'

const postDetails = ({post}) => {
    const router = useRouter();

    if(router.isFallback){
        return <Loader />
    }
    return (
        <div>
                <Head>
                    <title>{post.title}</title>
                    {/* <html lang="en" /> */}
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="manifest" href='/manifest.json' />  
                    <link rel="apple-touch-icon"  href="/icons/apple-touch-icon.png" />

                    <meta name="description" content={post.slug} />


                    <meta property="og:type" content="article" />

                    <meta property="og:title" content={post.title} />

                    <meta property="og:description" content={post.slug} />

                    <meta property="og:image" content={post.featuredImage?.url} />

                    <meta property="og:url" content={"https://developerscraft.com/post/"+post.featuredImagetitle} />

                    <meta property="og:site_name" content="https://developerscraft.com" />



                    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6951101662003064"
                        crossorigin="anonymous">
                    </Script>
                </Head>
      
            <div className="container mx-auto px-lg-10 px-5 py-5 mb-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="col-span-1 lg:col-span-8">
                        <PostDetail post={post} />
                        <Author author={post.author} />
                        <CommentForm  slug={post.slug}/>
                        <Comments slug={post.slug} />
                    </div>
                    <div className="col-span-1 lg:col-span-4">
                        <div className="relative lg:sticky top-8">
                            <Advertisement/>
                            <PostWidget slug={post.slug} categories = {post.categories.map(category => category.slug)} />
                            <Categories />
                        </div>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default postDetails
 
export async function getStaticPaths(){
    const posts = await getPosts();

    return {
        paths: posts.map(({node: { slug}}) =>({params:{slug}}) ),
        fallback: true,
    }
}
export async function getStaticProps({params}){
    const data = await getPostDetails(params.slug);
    
    return {
      props:{ post: data }
    }
  }

