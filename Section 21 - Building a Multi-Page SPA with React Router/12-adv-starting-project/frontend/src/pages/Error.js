import { useRouteError } from 'react-router-dom'

import PageContent from "../components/PageContent"
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  // if a response is thrown then this object will contain the status property
  // otherwise it will be the plain object thrown
  const error = useRouteError()

  let title = 'An error occurred!'
  let message = 'Something went wrong!'

  if (error.status === 500) {
    // since a response was thrown, we have to use the data property to access the content
    message = JSON.parse(error.data).message
  }

  if (error.status === 404) {
    title = 'Not found!'
    message = 'Could not find resource or page.'
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  )
}

export default ErrorPage