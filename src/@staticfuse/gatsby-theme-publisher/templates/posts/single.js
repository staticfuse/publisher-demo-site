import React from 'react'
import Layout from '@staticfuse/gatsby-theme-publisher/src/components/Layout'
import PostEntryMeta from '@staticfuse/gatsby-theme-publisher/src/components/PostEntryMeta'
import PostEntryTitle from '@staticfuse/gatsby-theme-publisher/src/components/PostEntryTitle'
import PostEntryMedia from '@staticfuse/gatsby-theme-publisher/src/components/PostEntryMedia'
import BelowPost from '@staticfuse/gatsby-theme-publisher/src/components/BelowPost'
import SEO from '@staticfuse/gatsby-theme-publisher/src/components/SEO'
import { Box } from '@chakra-ui/core'

const syntaxHighlighter = content => {
  if (!content) {
    return {
      __html: '',
    }
  }

  var regex = /\[javascript\]|\[php\]|\[html\]|\[css\]/g

  var regex2 = /\[\/javascript\]|\[\/php\]|\[\/html\]|\[\/css\]/gi

  return {
    __html: content.replace(regex, '<code>').replace(regex2, '</code>'),
  }
}

const Post = ({ pageContext: post }) => {
  return (
    <Layout>
      <SEO title={`${post.title}`} />
      <div className="post-wrapper single-post">
        <Box
          as="header"
          maxW="2xl"
          m="auto"
          mb={6}
          mt={6}
          className="entry-header"
        >
          <PostEntryTitle
            location="single"
            post={post}
            titleClass="entry-title"
          />

          <PostEntryMeta post={post} />
        </Box>

        {post.featuredImage && <PostEntryMedia post={post} location="single" />}

        <Box
          maxW="2xl"
          m="auto"
          className="entry-content"
          overflow="hidden"
          dangerouslySetInnerHTML={syntaxHighlighter(post.content)}
        />

        <BelowPost post={post} />
      </div>
    </Layout>
  )
}

export default Post
