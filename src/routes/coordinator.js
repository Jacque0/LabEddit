export const goToLogin = (navigate) =>{
    navigate('/login')
}
export const goToSignUp = (navigate) =>{
    navigate('/signup')
}
export const goToFeed = (navigate) =>{
    navigate('/')
}
export const goToFeedReplace = (navigate) =>{
    navigate('/', { replace: true })
}
export const goToPost = (navigate, id) =>{
    navigate(`/post/${id}`)
}

export const goBack = (navigate) =>{
    navigate(-1)
}