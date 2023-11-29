import './normalize.css';
import Layout from './components/Layout';
import Details from './components/Details';
import WorkExperience from './components/WorkExperience';
import Hobby from './components/Hobby';
import Avatar from './components/Avatar';

export default function App() {
  return (
    <Layout
      left = {
        <div>
          <Details />
          <WorkExperience />
          <Hobby />
        </div>
      }
      right = {
        <div>
          <Avatar />
        </div>
      }
    />
  )
}

