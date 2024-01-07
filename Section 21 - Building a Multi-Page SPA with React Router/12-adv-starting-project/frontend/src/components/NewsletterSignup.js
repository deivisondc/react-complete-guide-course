import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect } from 'react';

function NewsletterSignup() {
  // useFetcher when you want to trigger an action or loader
  // without actually load the page that the action / load belongs
  const fetcher = useFetcher()
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message)
    }
  }, [data, state])

  return (
    <fetcher.Form
      method="post"
      // must have the action pointing to the route that has the action / loader
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;