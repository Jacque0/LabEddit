import React, {useState} from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import { baseURL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'
import CardComment from '../../components/CardComment'
import { ContainerComments, ContainerPost } from './StylePost'
import PostForm from './PostForm'
import CircularProgress from "@material-ui/core/CircularProgress";

export default function PostPage({infoPost}) {
  useProtectedPage()
  const params = useParams()
  const [recharge, setRecharge] = useState(0)
  const [data, isLoading, error] = useRequestData([], `${baseURL}posts/${params.id}/comments` , recharge)
  
  const commentList = data.map((item)=>{
    return <CardComment key={item.id} post={item} />
  })
  return (
    <ContainerPost>
      <h1>{infoPost.title}</h1>
      <h3>{infoPost.body}</h3>
      <h2>De: {infoPost.username}</h2>
      <PostForm recharge={recharge} setRecharge={setRecharge} id={params.id} />
      <h2>Comentários:</h2>
      <ContainerComments>
        {isLoading && <CircularProgress color="primary" />}
        {!isLoading && error && <p>Ocorreu um erro</p>}
        {!isLoading && commentList && (commentList.length === 0?'Nenhum Comentário':commentList)}
      </ContainerComments>
    </ContainerPost>
  )
}
