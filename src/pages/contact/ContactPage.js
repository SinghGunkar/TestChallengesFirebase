import React from "react"
import { connect } from "react-redux"
import { useGetAllPostsQuery } from "../../redux/services/posts"
import { useGetPostByIdQuery } from "../../redux/services/posts"

import "./contactpageStyles.scss"

const ContactPage = props => {
    const { testCases } = props

    const {
        data: allPosts,
        error: loadingAllPostsError,
        isLoading: isLoadingAllPosts,
        isSuccess: isSuccessLoadingAllPosts,
        isError: isErrorLoadingAllPosts
    } = useGetAllPostsQuery()
    const {
        data: post,
        error: loadingOnePostError,
        isLoading: isLoadingOnePost,
        isSuccess: isSuccessLoadingOnePost,
        isError: isErrorLoadingOnePost
    } = useGetPostByIdQuery("2")

    return (
        <div>
            <h1>Have feedback?</h1>
            <h2>{testCases}</h2>
            {loadingOnePostError && "Loadings ..."}
            {isErrorLoadingOnePost && "Error..."}
            {post && `${post.title}`}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        testCases: state.testCases.instructions
    }
}

export default connect(mapStateToProps)(ContactPage)
