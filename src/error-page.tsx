import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const { statusText, message }: any = error;

  return (
    <div id='error-page' className='flex items-center justify-center h-screen flex-col'>
      <h1 className='text-3xl font-bold mb-2'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || message}</i>
      </p>
    </div>
  );
}
