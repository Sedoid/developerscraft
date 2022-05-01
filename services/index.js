import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
// DESC
export const getPosts = async() =>{
    const query = gql`
    query MyQuery {
        postsConnection(orderBy: createdAt_DESC) {
          edges {
            node {
              author {
                    bio
                    id
                    name
                    photo {
                    url
                    }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              featuredAudio{
                url
              }
              categories {
                name
                slug
              }
              content{
                raw
              }
              topics{
                name
                id
                slug
              }
            }
          }
        }
      }
      
    `

    const results = await request(graphqlAPI,query)
    return results.postsConnection.edges;
}

export const getRecentPosts = async() =>{
    const query = gql`
    query GetPostDetails(){
        posts(orderBy: createdAt_ASC
            last: 3
            ){
                title
                featuredImage{
                    url
                }
                featuredAudio{
                  url
                }
                categories {
                  name
                  slug
                }
                createdAt
                slug
            }
        }
    `
    const result = await request(graphqlAPI, query);

    return result.posts;
}

export const getSimilarPosts = async(categories,slug) =>{
    const query = gql`
    query GetPostDetails($slug:String!, $categories:[String!]){
        posts(
            where: {slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
            last: 3
        ){
            title
            featuredImage{
                url
            }
            featuredAudio{
              url
            }
            createdAt
            slug
        }
    }
    `

    const result = await request(graphqlAPI, query, {categories,slug});

    return result.posts;
}  

export const getSimilarTopics = async(topic,slug) =>{
  const query = gql`
  query GetPostTopics($slug:String!, $topic:[String!]){
      posts(
          where: {slug_not: $slug, AND: {topics_some: { slug_in: $topic}}}
          last: 3
      ){
          title
          featuredImage{
              url
          }
          featuredAudio{
            url
          }
          createdAt
          slug
      }
  }
  `

  const result = await request(graphqlAPI, query, {categories,slug});

  return result.posts;
}  



export const getCategories = async() =>{
  const query = gql`
      query GetCategory{
        categories{
          name
          slug
        }
      }
  `
  
  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const getTopics = async() =>{
  const query = gql`
      query GetTopics{
        topics {
          name
          id
          slug
        }
      }
  `
  
  const result = await request(graphqlAPI, query);

  return result.topics;
}


export const getPostDetails = async(slug) =>{
  const query = gql`
      query GetPostDetails($slug: String!){
        post(where:{slug: $slug}){
          author {
              bio
              id
              name
              photo {
              url
              }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          featuredAudio{
            url
          }
          categories {
            name
            slug
          }
          content{
            raw
          }
          topics {
            name
            id
            slug
          }
      
        }
      }
  `
  const results = await request(graphqlAPI,query,{slug})
  return results.post;
}

export const submitComment = async(obj) =>{
  const result  = await fetch('/api/comments',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj),
  });

  return result.json();
}


export const getComments = async(slug) =>{
  const query = gql`
      query GetCategory($slug: String!){
        comments(where: {post :{slug: $slug}}){
          name
          createdAt
          comment
        }
      }
  `
  
  const result = await request(graphqlAPI, query,{slug});

  return result.comments;
}

export const getFeaturedPosts = async() =>{
  const query = gql`
  query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author{
          name
          photo{
            url
          }
        }
        featuredImage{
          url
        }
        featuredAudio{
          url
        }
        title
        slug
        createdAt
      }
    }
    
  `

  const results = await request(graphqlAPI,query)
  return results.posts;
}


export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            featuredAudio{
              url
            }
            categories {
              name
              slug
            }
            topics {
              name
              id
            }
        
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

